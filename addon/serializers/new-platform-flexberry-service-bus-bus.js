import ClientSerializer from './new-platform-flexberry-service-bus-client';
import {
  Serializer as BusSerializer
} from '../mixins/regenerated/serializers/new-platform-flexberry-service-bus-bus';

export default ClientSerializer.extend(BusSerializer, {
  /**
    Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
