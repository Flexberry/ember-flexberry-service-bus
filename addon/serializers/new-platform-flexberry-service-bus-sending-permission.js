import __ApplicationSerializer from './application';
import {
  Serializer as SendingPermissionSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-sending-permission';

export default __ApplicationSerializer.extend(SendingPermissionSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
