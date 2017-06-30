import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  messageType: DS.belongsTo('new-platform-flexberry-service-bus-message-type', {
    inverse: null,
    async: false,
  }),
  client: DS.belongsTo('new-platform-flexberry-service-bus-client', {
    inverse: 'sendingPermissions',
    async: false,
    polymorphic: true,
  }),

  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
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
  modelClass.defineProjection('AuditView', 'new-platform-flexberry-service-bus-sending-permission', {
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
      iD: Projection.attr('ID', { hidden: true })
    }, { displayMemberPath: 'iD' })
  });

  modelClass.defineProjection('DetailView', 'new-platform-flexberry-service-bus-sending-permission', {
    messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', 'Message type', {
      name: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'name' }),
    client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {

    }, { hidden: true })
  });
};
