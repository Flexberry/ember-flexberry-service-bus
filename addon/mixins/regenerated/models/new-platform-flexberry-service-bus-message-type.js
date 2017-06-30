import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  iD: DS.attr('string'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),

  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },

  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'new-platform-flexberry-service-bus-message-type', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name'),
    description: Projection.attr('Description')
  });

  modelClass.defineProjection('EditView', 'new-platform-flexberry-service-bus-message-type', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name'),
    description: Projection.attr('Description')
  });

  modelClass.defineProjection('ListView', 'new-platform-flexberry-service-bus-message-type', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name')
  });
};
