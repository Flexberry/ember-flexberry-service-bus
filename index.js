/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-flexberry-service-bus',

  included: function(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/ember-flexberry-service-bus/register-version.js');
  }
};
