import __ApplicationSerializer from './application';
import {
  Serializer as SubscriptionStatisticsMonitorSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-subscription-statistics-monitor';

export default __ApplicationSerializer.extend(SubscriptionStatisticsMonitorSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
