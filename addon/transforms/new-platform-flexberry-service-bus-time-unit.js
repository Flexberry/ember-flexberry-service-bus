import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import TimeUnitEnum from '../enums/new-platform-flexberry-service-bus-time-unit';

export default FlexberryEnum.extend({
  enum: TimeUnitEnum,
  sourceType: 'NewPlatform.Flexberry.ServiceBus.TimeUnit',
});
