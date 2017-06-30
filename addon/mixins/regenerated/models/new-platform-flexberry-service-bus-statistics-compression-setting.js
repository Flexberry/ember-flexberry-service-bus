import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';

export let Model = Ember.Mixin.create({
  compressTo: DS.attr('new-platform-flexberry-service-bus-statistics-interval'),
  statisticsAgeCount: DS.attr('number'),
  statisticsAgeUnits: DS.attr('new-platform-flexberry-service-bus-time-unit'),
  /**
    Non-stored property.

    @property statisticsAge
  */
  statisticsAge: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'statisticsAgeCompute' method in model class (outside of this mixin) if you want to compute value of 'statisticsAge' property.

    @method _statisticsAgeCompute
    @private
    @example
      ```javascript
      _statisticsAgeChanged: Ember.on('init', Ember.observer('statisticsAge', function() {
        Ember.run.once(this, '_statisticsAgeCompute');
      }))
      ```
  */
  _statisticsAgeCompute: function() {
    let result = (this.statisticsAgeCompute && typeof this.statisticsAgeCompute === 'function') ? this.statisticsAgeCompute() : null;
    this.set('statisticsAge', result);
  },
  compressFrequencyCount: DS.attr('number'),
  compressFrequencyUnits: DS.attr('new-platform-flexberry-service-bus-time-unit'),
  /**
    Non-stored property.

    @property compressFrequency
  */
  compressFrequency: DS.attr('string'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'compressFrequencyCompute' method in model class (outside of this mixin) if you want to compute value of 'compressFrequency' property.

    @method _compressFrequencyCompute
    @private
    @example
      ```javascript
      _compressFrequencyChanged: Ember.on('init', Ember.observer('compressFrequency', function() {
        Ember.run.once(this, '_compressFrequencyCompute');
      }))
      ```
  */
  _compressFrequencyCompute: function() {
    let result = (this.compressFrequencyCompute && typeof this.compressFrequencyCompute === 'function') ? this.compressFrequencyCompute() : null;
    this.set('compressFrequency', result);
  },
  nextCompressTime: DS.attr('date'),
  lastCompressTime: DS.attr('date'),
  createTime: DS.attr('date'),
  creator: DS.attr('string'),
  editTime: DS.attr('date'),
  editor: DS.attr('string'),
  statisticsSetting: DS.belongsTo('new-platform-flexberry-service-bus-statistics-setting', {
    inverse: 'statisticsCompressionSetting',
    async: false,
  }),

  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      compressTo: { presence: true },
      statisticsAgeCount: { presence: true },
      statisticsAgeUnits: { presence: true },
      compressFrequencyCount: { presence: true },
      compressFrequencyUnits: { presence: true },
      nextCompressTime: { datetime: true },
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
  modelClass.defineProjection('AuditView', 'new-platform-flexberry-service-bus-statistics-compression-setting', {
    compressTo: Projection.attr('Compress to'),
    statisticsAgeCount: Projection.attr('Statistics age count'),
    statisticsAgeUnits: Projection.attr('Statistics age units'),
    statisticsAge: Projection.attr('Statistics age'),
    compressFrequencyCount: Projection.attr('Compress frequency count'),
    compressFrequencyUnits: Projection.attr('Compress frequency units'),
    compressFrequency: Projection.attr('Compress frequency'),
    nextCompressTime: Projection.attr('Next compress time'),
    lastCompressTime: Projection.attr('Last compress time')
  });

  modelClass.defineProjection('DetailView', 'new-platform-flexberry-service-bus-statistics-compression-setting', {
    compressTo: Projection.attr('Compress to interval'),
    statisticsAgeCount: Projection.attr('Compress older than'),
    statisticsAgeUnits: Projection.attr(''),
    compressFrequencyCount: Projection.attr('Compress frequency'),
    compressFrequencyUnits: Projection.attr(''),
    nextCompressTime: Projection.attr('Time of next compression'),
    lastCompressTime: Projection.attr('Time of last compression'),
    statisticsSetting: Projection.belongsTo('new-platform-flexberry-service-bus-statistics-setting', '', {
    }, { hidden: true })
  });

  modelClass.defineProjection('EditView', 'new-platform-flexberry-service-bus-statistics-compression-setting', {
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
    compressTo: Projection.attr('Compress to interval'),
    statisticsAgeCount: Projection.attr('Compress older than'),
    statisticsAgeUnits: Projection.attr(''),
    compressFrequencyCount: Projection.attr('Compress frequency'),
    compressFrequencyUnits: Projection.attr(''),
    nextCompressTime: Projection.attr('Time of next compression'),
    lastCompressTime: Projection.attr('Time of last compression')
  });

  modelClass.defineProjection('ListView', 'new-platform-flexberry-service-bus-statistics-compression-setting', {
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
    compressTo: Projection.attr('Compress to interval'),
    statisticsAgeCount: Projection.attr('', { hidden: true }),
    statisticsAgeUnits: Projection.attr('', { hidden: true }),
    statisticsAge: Projection.attr('Compress older than'),
    compressFrequencyCount: Projection.attr('', { hidden: true }),
    compressFrequencyUnits: Projection.attr('', { hidden: true }),
    compressFrequency: Projection.attr('Compress frequency'),
    nextCompressTime: Projection.attr('Time of next compression'),
    lastCompressTime: Projection.attr('Time of last compression')
  });
};
