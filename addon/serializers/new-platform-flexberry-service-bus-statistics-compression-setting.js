import __ApplicationSerializer from './application';
import {
  Serializer as StatisticsCompressionSettingSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-statistics-compression-setting';

export default __ApplicationSerializer.extend(StatisticsCompressionSettingSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
