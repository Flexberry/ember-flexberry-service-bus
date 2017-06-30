import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import StatisticsIntervalEnum from '../enums/new-platform-flexberry-service-bus-statistics-interval';

export default FlexberryEnum.extend({
  enum: StatisticsIntervalEnum,
  sourceType: 'NewPlatform.Flexberry.ServiceBus.StatisticsInterval',
});
