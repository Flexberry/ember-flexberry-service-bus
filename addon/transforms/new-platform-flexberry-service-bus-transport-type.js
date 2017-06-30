import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import TransportTypeEnum from '../enums/new-platform-flexberry-service-bus-transport-type';

export default FlexberryEnum.extend({
  enum: TransportTypeEnum,
  sourceType: 'NewPlatform.Flexberry.ServiceBus.TransportType',
});
