import __ApplicationSerializer from './application';
import {
  Serializer as SubscriptionSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-subscription';

export default __ApplicationSerializer.extend(SubscriptionSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
