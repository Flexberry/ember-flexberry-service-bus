import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('new-platform-flexberry-service-bus-client-list-form');
  this.route('new-platform-flexberry-service-bus-client-edit-form', {
    path: 'new-platform-flexberry-service-bus-client-edit-form/:id'
  });
  this.route('new-platform-flexberry-service-bus-client-edit-form.new', {
    path: 'new-platform-flexberry-service-bus-client-edit-form/new'
  });

  this.route('new-platform-flexberry-service-bus-message-list-form');
  this.route('new-platform-flexberry-service-bus-message-edit-form', {
    path: 'new-platform-flexberry-service-bus-message-edit-form/:id'
  });

  this.route('new-platform-flexberry-service-bus-message-type-list-form');
  this.route('new-platform-flexberry-service-bus-message-type-edit-form', {
    path: 'new-platform-flexberry-service-bus-message-type-edit-form/:id'
  });
  this.route('new-platform-flexberry-service-bus-message-type-edit-form.new', {
    path: 'new-platform-flexberry-service-bus-message-type-edit-form/new'
  });

  this.route('new-platform-flexberry-service-bus-statistics-compression-setting-list-form');
  this.route('new-platform-flexberry-service-bus-statistics-compression-setting-edit-form', {
    path: 'new-platform-flexberry-service-bus-statistics-compression-setting-edit-form/:id'
  });
  this.route('new-platform-flexberry-service-bus-statistics-compression-setting-edit-form.new', {
    path: 'new-platform-flexberry-service-bus-statistics-compression-setting-edit-form/new'
  });

  this.route('new-platform-flexberry-service-bus-statistics-monitor-list-form');
  this.route('new-platform-flexberry-service-bus-statistics-monitor-edit-form', {
    path: 'new-platform-flexberry-service-bus-statistics-monitor-edit-form/:id'
  });
  this.route('new-platform-flexberry-service-bus-statistics-monitor-edit-form.new', {
    path: 'new-platform-flexberry-service-bus-statistics-monitor-edit-form/new'
  });

  this.route('new-platform-flexberry-service-bus-statistics-record-list-form');
  this.route('new-platform-flexberry-service-bus-statistics-record-edit-form', {
    path: 'new-platform-flexberry-service-bus-statistics-record-edit-form/:id'
  });

  this.route('new-platform-flexberry-service-bus-statistics-setting-list-form');
  this.route('new-platform-flexberry-service-bus-statistics-setting-edit-form', {
    path: 'new-platform-flexberry-service-bus-statistics-setting-edit-form/:id'
  });
  this.route('new-platform-flexberry-service-bus-statistics-setting-edit-form.new', {
    path: 'new-platform-flexberry-service-bus-statistics-setting-edit-form/new'
  });

  this.route('new-platform-flexberry-service-bus-subscription-list-form');
  this.route('new-platform-flexberry-service-bus-subscription-edit-form', {
    path: 'new-platform-flexberry-service-bus-subscription-edit-form/:id'
  });
  this.route('new-platform-flexberry-service-bus-subscription-edit-form.new', {
    path: 'new-platform-flexberry-service-bus-subscription-edit-form/new'
  });
});

export default Router;
