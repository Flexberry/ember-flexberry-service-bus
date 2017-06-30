import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  managerAddress: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),

  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      managerAddress: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },

  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'new-platform-flexberry-service-bus-client'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'new-platform-flexberry-service-bus-bus', {
    managerAddress: Projection.attr('Manager address'),
    iD: Projection.attr('ID'),
    name: Projection.attr('Name'),
    address: Projection.attr('Address'),
    dnsIdentity: Projection.attr('Dns identity'),
    description: Projection.attr('Description'),
    subscriptions: Projection.hasMany('new-platform-flexberry-service-bus-subscription', 'Subscriptions', {
      description: Projection.attr('Description'),
      expiryDate: Projection.attr('Expiry date'),
      isCallback: Projection.attr('Is callback'),
      transportType: Projection.attr('Transport type'),
      messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
        iD: Projection.attr('ID', { hidden: true })
      }, { displayMemberPath: 'iD' })
    })
  });

  modelClass.defineProjection('EditView', 'new-platform-flexberry-service-bus-bus', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name'),
    managerAddress: Projection.attr('Manager address'),
    address: Projection.attr('Address'),
    dnsIdentity: Projection.attr('DNS Identity'),
    description: Projection.attr('Description'),
    subscriptions: Projection.hasMany('new-platform-flexberry-service-bus-subscription', 'Subscriptions', {
      isCallback: Projection.attr('Callback'),
      messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
        name: Projection.attr('', { hidden: true })
      }, { displayMemberPath: 'name' }),
      expiryDate: Projection.attr('Expiry date'),
      transportType: Projection.attr('Transport type'),
      client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {

      }, { hidden: true })
    })
  });

  modelClass.defineProjection('ListView', 'new-platform-flexberry-service-bus-bus', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name'),
    managerAddress: Projection.attr('Manager address')
  });
};
