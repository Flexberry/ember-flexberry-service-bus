import __ApplicationSerializer from './application';
import {
  Serializer as MessageTypeSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-message-type';

export default __ApplicationSerializer.extend(MessageTypeSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
