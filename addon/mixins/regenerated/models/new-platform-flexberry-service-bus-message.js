import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  sendingTime: DS.attr('date'),
  receivingTime: DS.attr('date'),
  isSending: DS.attr('boolean'),
  errorCount: DS.attr('number'),
  sender: DS.attr('string'),
  body: DS.attr('string'),
  attachment: DS.attr('string'),
  priority: DS.attr('number'),
  group: DS.attr('string'),
  tags: DS.attr('string'),
  logs: DS.attr('string'),
  messageType: DS.belongsTo('new-platform-flexberry-service-bus-message-type', {
    inverse: null,
    async: false,
  }),
  recipient: DS.belongsTo('new-platform-flexberry-service-bus-client', {
    inverse: null,
    async: false,
    polymorphic: true,
  }),

  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      sendingTime: { datetime: true },
      receivingTime: { datetime: true },
      messageType: { presence: true },
      recipient: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },

  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('EditView', 'new-platform-flexberry-service-bus-message', {
    sender: Projection.attr('Sender'),
    recipient: Projection.belongsTo('new-platform-flexberry-service-bus-client', 'Recipient', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    sendingTime: Projection.attr('Sending time'),
    receivingTime: Projection.attr('Receiving time'),
    isSending: Projection.attr('Is sending'),
    group: Projection.attr('Group'),
    priority: Projection.attr('Priority'),
    errorCount: Projection.attr('Error count'),
    body: Projection.attr('Body'),
    attachment: Projection.attr('Attachment'),
    tags: Projection.attr('Tags')
  });

  modelClass.defineProjection('ListView', 'new-platform-flexberry-service-bus-message', {
    sender: Projection.attr('Sender'),
    recipient: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
      name: Projection.attr('Recipient')
    }, { hidden: true }),
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', '', {
      name: Projection.attr('Message type')
    }, { hidden: true }),
    sendingTime: Projection.attr('Sending time'),
    receivingTime: Projection.attr('Receiving time'),
    isSending: Projection.attr('Is sending'),
    priority: Projection.attr('Priority'),
    errorCount: Projection.attr('Error count')
  });

  modelClass.defineProjection('LookupView', 'new-platform-flexberry-service-bus-message', {
    sender: Projection.attr('Sender'),
    recipient: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
      name: Projection.attr('Recipient')
    }, { hidden: true }),
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', '', {
      name: Projection.attr('Message type')
    }, { hidden: true }),
    sendingTime: Projection.attr('Sending time'),
    receivingTime: Projection.attr('Receiving time'),
    errorCount: Projection.attr('Error count')
  });
};
