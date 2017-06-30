import { Projection } from 'ember-flexberry-data';
import {
  Model as SendingPermissionMixin,
  defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-sending-permission';

let Model = Projection.Model.extend(SendingPermissionMixin);

defineProjections(Model);

export default Model;
