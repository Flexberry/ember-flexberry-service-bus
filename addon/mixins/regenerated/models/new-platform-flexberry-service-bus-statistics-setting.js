import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  subscription: DS.belongsTo('new-platform-flexberry-service-bus-subscription', {
    inverse: null,
    async: false,
  }),
  statisticsCompressionSetting: DS.hasMany('new-platform-flexberry-service-bus-statistics-compression-setting', {
    inverse: 'statisticsSetting',
    async: false,
  }),
  statisticsRecord: DS.hasMany('new-platform-flexberry-service-bus-statistics-record', {
    inverse: 'statisticsSetting',
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
  modelClass.defineProjection('AuditView', 'new-platform-flexberry-service-bus-statistics-setting', {
    subscription: Projection.belongsTo('new-platform-flexberry-service-bus-subscription', 'Subscription', {
      description: Projection.attr('Description')
    }),
    statisticsCompressionSetting: Projection.hasMany('new-platform-flexberry-service-bus-statistics-compression-setting', 'Statistics compression setting', {
      compressTo: Projection.attr('Compress to'),
      statisticsAgeCount: Projection.attr('Statistics age count'),
      statisticsAgeUnits: Projection.attr('Statistics age units'),
      statisticsAge: Projection.attr('Statistics age'),
      compressFrequencyCount: Projection.attr('Compress frequency count'),
      compressFrequencyUnits: Projection.attr('Compress frequency units'),
      compressFrequency: Projection.attr('Compress frequency'),
      nextCompressTime: Projection.attr('Next compress time'),
      lastCompressTime: Projection.attr('Last compress time')
    })
  });

  modelClass.defineProjection('EditView', 'new-platform-flexberry-service-bus-statistics-setting', {
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
    statisticsCompressionSetting: Projection.hasMany('new-platform-flexberry-service-bus-statistics-compression-setting', 'Statistics compression settings', {
      compressTo: Projection.attr('Compress to interval'),
      statisticsAgeCount: Projection.attr('Compress older than'),
      statisticsAgeUnits: Projection.attr(''),
      compressFrequencyCount: Projection.attr('Compress frequency'),
      compressFrequencyUnits: Projection.attr(''),
      nextCompressTime: Projection.attr('Time of next compression'),
      lastCompressTime: Projection.attr('Time of last compression'),
      statisticsSetting: Projection.belongsTo('new-platform-flexberry-service-bus-statistics-setting', '', {

      }, { hidden: true })
    }),
    statisticsRecord: Projection.hasMany('new-platform-flexberry-service-bus-statistics-record', 'Statistics records', {
      since: Projection.attr('Start interval'),
      to: Projection.attr('End interval'),
      statisticsInterval: Projection.attr('Interval'),
      sentCount: Projection.attr('Messages sent'),
      receivedCount: Projection.attr('Messages received'),
      errorsCount: Projection.attr('Errors (including repeated)'),
      uniqueErrorsCount: Projection.attr('Unique errors (without repeated)'),
      statisticsSetting: Projection.belongsTo('new-platform-flexberry-service-bus-statistics-setting', '', {

      }, { hidden: true })
    })
  });

  modelClass.defineProjection('ListView', 'new-platform-flexberry-service-bus-statistics-setting', {
    subscription: Projection.belongsTo('new-platform-flexberry-service-bus-subscription', '', {
      description: Projection.attr('Subscription'),
      client: Projection.belongsTo('new-platform-flexberry-service-bus-client', '', {
        iD: Projection.attr('', { hidden: true }),
        name: Projection.attr('', { hidden: true })
      }, { hidden: true }),
      messageType: Projection.belongsTo('new-platform-flexberry-service-bus-message-type', '', {
        iD: Projection.attr('', { hidden: true }),
        name: Projection.attr('', { hidden: true })
      }, { hidden: true })
    }, { hidden: true })
  });
};
