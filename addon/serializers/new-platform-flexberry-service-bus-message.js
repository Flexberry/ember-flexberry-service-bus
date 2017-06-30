import __ApplicationSerializer from './application';
import {
  Serializer as MessageSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-message';

export default __ApplicationSerializer.extend(MessageSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
