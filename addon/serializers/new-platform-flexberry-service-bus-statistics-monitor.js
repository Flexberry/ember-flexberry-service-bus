import __ApplicationSerializer from './application';
import {
  Serializer as StatisticsMonitorSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-statistics-monitor';

export default __ApplicationSerializer.extend(StatisticsMonitorSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
