/* jshint node: true */

var RSVP = require('rsvp');
var path = require('path');
var fs = require('fs');

module.exports = {
  beforeCommit: function(project, versions) {
    return new RSVP.Promise(function(resolve, reject) {
      var filePath = path.join(project.root, 'vendor/ember-flexberry-service-bus/register-version.js');
      fs.access(filePath, (fs.constants || fs).W_OK, function(error) {
        if (error) {
          reject('File "' + filePath + '" not found or not writable.');
          throw error;
        }

        fs.readFile(filePath, 'utf8', function(error, data) {
          if (error) {
            reject('Could not read file: ' + filePath);
            throw error;
          }

          var newVersion = versions.next.replace(/^v/, '');
          data = data.replace(/(version = ')(.+)(';)/, '$1' + newVersion + '$3');

          fs.writeFile(filePath, data, 'utf8', function(error) {
            if (error) {
              reject('Could not write to file:' + filePath);
              throw error;
            }

            resolve();
          });
        });
      });
    });
  }
};
