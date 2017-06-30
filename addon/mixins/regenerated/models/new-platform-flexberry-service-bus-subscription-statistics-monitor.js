import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  number: DS.attr('number'),
  category: DS.attr('string'),
  name: DS.attr('string'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  subscription: DS.belongsTo('new-platform-flexberry-service-bus-subscription', {
    inverse: null,
    async: false,
  }),
  statisticsMonitor: DS.belongsTo('new-platform-flexberry-service-bus-statistics-monitor', {
    inverse: 'subscriptionStatisticsMonitor',
    async: false,
  }),

  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      number: { presence: true },
      subscription: { presence: true },
      statisticsMonitor: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },

  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AuditView', 'new-platform-flexberry-service-bus-subscription-statistics-monitor', {
    number: Projection.attr('Number'),
    category: Projection.attr('Category'),
    name: Projection.attr('Name'),
    subscription: Projection.belongsTo('new-platform-flexberry-service-bus-subscription', 'Subscription', {
      description: Projection.attr('Description', { hidden: true })
    }, { displayMemberPath: 'description' })
  });

  modelClass.defineProjection('DetailView', 'new-platform-flexberry-service-bus-subscription-statistics-monitor', {
    number: Projection.attr('Number'),
    name: Projection.attr('Name'),
    category: Projection.attr('Category'),
    subscription: Projection.belongsTo('new-platform-flexberry-service-bus-subscription', 'Subscription', {
      description: Projection.attr('', { hidden: true }),
      client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
        iD: Projection.attr('', { hidden: true }),
        name: Projection.attr('', { hidden: true })
      }, { hidden: true }),
      messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', '', {
        iD: Projection.attr('', { hidden: true }),
        name: Projection.attr('', { hidden: true })
      }, { hidden: true })
    }, { displayMemberPath: 'description' }),
    statisticsMonitor: Projection.belongsTo('new-platform-flexberry-service-bus-statistics-monitor', '', {
    }, { hidden: true })
  });
};
