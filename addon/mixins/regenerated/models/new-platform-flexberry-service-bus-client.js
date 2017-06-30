import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  iD: DS.attr('string'),
  name: DS.attr('string'),
  address: DS.attr('string'),
  dnsIdentity: DS.attr('string'),
  description: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  sendingPermissions: DS.hasMany('new-platform-flexberry-service-bus-sending-permission', {
    inverse: 'client',
    async: false,
  }),
  subscriptions: DS.hasMany('new-platform-flexberry-service-bus-subscription', {
    inverse: 'client',
    async: false,
  }),

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
  modelClass.defineProjection('AuditView', 'new-platform-flexberry-service-bus-client', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name'),
    address: Projection.attr('Address'),
    dnsIdentity: Projection.attr('Dns identity'),
    description: Projection.attr('Description'),
    sendingPermissions: Projection.hasMany('new-platform-flexberry-service-bus-sending-permission', 'Sending permissions', {
      messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
        iD: Projection.attr('ID', { hidden: true })
      }, { displayMemberPath: 'iD' })
    }),
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

  modelClass.defineProjection('EditView', 'new-platform-flexberry-service-bus-client', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name'),
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
    }),
    sendingPermissions: Projection.hasMany('new-platform-flexberry-service-bus-sending-permission', 'Sending permissions', {
      messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
        name: Projection.attr('', { hidden: true })
      }, { displayMemberPath: 'name' }),
      client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {

      }, { hidden: true })
    })
  });

  modelClass.defineProjection('ListView', 'new-platform-flexberry-service-bus-client', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name'),
    address: Projection.attr('Address')
  });

  modelClass.defineProjection('LookupView', 'new-platform-flexberry-service-bus-client', {
    iD: Projection.attr('ID'),
    name: Projection.attr('Name')
  });
};
