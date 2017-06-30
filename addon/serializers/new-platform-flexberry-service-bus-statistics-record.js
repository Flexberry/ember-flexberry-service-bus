import __ApplicationSerializer from './application';
import {
  Serializer as StatisticsRecordSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-statistics-record';

export default __ApplicationSerializer.extend(StatisticsRecordSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
