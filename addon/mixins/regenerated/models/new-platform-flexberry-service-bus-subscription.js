import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  description: DS.attr('string'),
  expiryDate: DS.attr('date'),
  isCallback: DS.attr('boolean'),
  transportType: DS.attr('new-platform-flexberry-service-bus-transport-type'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  messageType: DS.belongsTo('new-platform-flexberry-service-bus-message-type', {
    inverse: null,
    async: false,
  }),
  client: DS.belongsTo('new-platform-flexberry-service-bus-client', {
    inverse: 'subscriptions',
    async: false,
    polymorphic: true,
  }),

  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      expiryDate: { datetime: true },
      messageType: { presence: true },
      client: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },

  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'new-platform-flexberry-service-bus-subscription', {
    description: Projection.attr('Description'),
    expiryDate: Projection.attr('Expiry date'),
    isCallback: Projection.attr('Is callback'),
    transportType: Projection.attr('Transport type'),
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
      iD: Projection.attr('ID', { hidden: true })
    }, { displayMemberPath: 'iD' })
  });

  modelClass.defineProjection('DetailView', 'new-platform-flexberry-service-bus-subscription', {
    isCallback: Projection.attr('Callback'),
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    expiryDate: Projection.attr('Expiry date'),
    transportType: Projection.attr('Transport type'),
    client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
    }, { hidden: true })
  });

  modelClass.defineProjection('EditView', 'new-platform-flexberry-service-bus-subscription', {
    client: Projection.belongsTo('new-platform-flexberry-service-bus-client', 'Client', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    expiryDate: Projection.attr('Expiry date'),
    description: Projection.attr('Description'),
    isCallback: Projection.attr('Callback'),
    transportType: Projection.attr('Transport type')
  });

  modelClass.defineProjection('ListView', 'new-platform-flexberry-service-bus-subscription', {
    isCallback: Projection.attr('Callback'),
    client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
      name: Projection.attr('Client')
    }, { hidden: true }),
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', '', {
      name: Projection.attr('Message type')
    }, { hidden: true }),
    expiryDate: Projection.attr('Expiry date'),
    transportType: Projection.attr('Transport type')
  });

  modelClass.defineProjection('LookupView', 'new-platform-flexberry-service-bus-subscription', {
    isCallback: Projection.attr('Callback'),
    description: Projection.attr('Description'),
    expiryDate: Projection.attr('Expiry date'),
    transportType: Projection.attr('Transport type'),
    client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
      iD: Projection.attr('', { hidden: true }),
      name: Projection.attr('', { hidden: true })
    }, { hidden: true }),
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', '', {
      iD: Projection.attr('', { hidden: true }),
      name: Projection.attr('', { hidden: true })
    }, { hidden: true })
  });
};
