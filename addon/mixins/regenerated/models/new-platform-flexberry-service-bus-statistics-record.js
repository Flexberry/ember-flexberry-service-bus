import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  since: DS.attr('date'),
  to: DS.attr('date'),
  statisticsInterval: DS.attr('new-platform-flexberry-service-bus-statistics-interval'),
  sentCount: DS.attr('number'),
  receivedCount: DS.attr('number'),
  errorsCount: DS.attr('number'),
  uniqueErrorsCount: DS.attr('number'),
  connectionCount: DS.attr('number'),
  queueLength: DS.attr('number'),
  sentAvgTime: DS.attr('number'),
  queryAvgTime: DS.attr('number'),
  statisticsSetting: DS.belongsTo('new-platform-flexberry-service-bus-statistics-setting', {
    inverse: 'statisticsRecord',
    async: false,
  }),

  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      since: { datetime: true },
      to: { datetime: true },
      statisticsInterval: { presence: true },
      statisticsSetting: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },

  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('DetailView', 'new-platform-flexberry-service-bus-statistics-record', {
    since: Projection.attr('Start interval'),
    to: Projection.attr('End interval'),
    statisticsInterval: Projection.attr('Interval'),
    sentCount: Projection.attr('Messages sent'),
    receivedCount: Projection.attr('Messages received'),
    errorsCount: Projection.attr('Errors (including repeated)'),
    uniqueErrorsCount: Projection.attr('Unique errors (without repeated)'),
    statisticsSetting: Projection.belongsTo('new-platform-flexberry-service-bus-statistics-setting', '', {
    }, { hidden: true })
  });

  modelClass.defineProjection('EditView', 'new-platform-flexberry-service-bus-statistics-record', {
    statisticsSetting: Projection.belongsTo('new-platform-flexberry-service-bus-statistics-setting', 'Statistics setting', {
      subscription: Projection.belongsTo('new-platform-flexberry-service-bus-subscription', '', {
        description: Projection.attr('', { hidden: true }),
        client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
          iD: Projection.attr('', { hidden: true }),
          name: Projection.attr('', { hidden: true })
        }, { hidden: true }),
        messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', '', {
          iD: Projection.attr('', { hidden: true }),
          name: Projection.attr('', { hidden: true })
        }, { hidden: true })
      }, { hidden: true })
    }, { displayMemberPath: 'subscription.Description' }),
    since: Projection.attr('Start interval'),
    to: Projection.attr('End interval'),
    statisticsInterval: Projection.attr('Interval'),
    sentCount: Projection.attr('Messages sent'),
    receivedCount: Projection.attr('Messages received'),
    errorsCount: Projection.attr('Errors (including repeated)'),
    uniqueErrorsCount: Projection.attr('Unique errors (without repeated)'),
    connectionCount: Projection.attr('Outgoing connections'),
    queueLength: Projection.attr('Queue at end of interval'),
    sentAvgTime: Projection.attr('Sent average time'),
    queryAvgTime: Projection.attr('Query average time')
  });

  modelClass.defineProjection('ListView', 'new-platform-flexberry-service-bus-statistics-record', {
    statisticsSetting: Projection.belongsTo('new-platform-flexberry-service-bus-statistics-setting', '', {
      subscription: Projection.belongsTo('new-platform-flexberry-service-bus-subscription', '', {
        description: Projection.attr('Statistics setting'),
        client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
          iD: Projection.attr('', { hidden: true }),
          name: Projection.attr('', { hidden: true })
        }, { hidden: true }),
        messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', '', {
          iD: Projection.attr('', { hidden: true }),
          name: Projection.attr('', { hidden: true })
        }, { hidden: true })
      }, { hidden: true })
    }, { hidden: true }),
    since: Projection.attr('Start interval'),
    to: Projection.attr('End interval'),
    statisticsInterval: Projection.attr('Interval'),
    sentCount: Projection.attr('Messages sent'),
    receivedCount: Projection.attr('Messages received'),
    errorsCount: Projection.attr('Errors (including repeated)'),
    uniqueErrorsCount: Projection.attr('Unique errors (without repeated)')
  });
};
