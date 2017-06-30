import { Projection } from 'ember-flexberry-data';
import {
  Model as MessageTypeMixin,
  defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-message-type';

let Model = Projection.Model.extend(MessageTypeMixin);

defineProjections(Model);

export default Model;
