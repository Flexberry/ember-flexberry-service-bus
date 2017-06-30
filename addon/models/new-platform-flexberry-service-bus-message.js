import { Projection } from 'ember-flexberry-data';
import {
  Model as MessageMixin,
  defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-message';

let Model = Projection.Model.extend(MessageMixin);

defineProjections(Model);

export default Model;
