import __ApplicationSerializer from './application';
import {
  Serializer as StatisticsSettingSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-statistics-setting';

export default __ApplicationSerializer.extend(StatisticsSettingSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
