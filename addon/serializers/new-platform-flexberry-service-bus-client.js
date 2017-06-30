import __ApplicationSerializer from './application';
import {
  Serializer as ClientSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-client';

export default __ApplicationSerializer.extend(ClientSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
