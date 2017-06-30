import { Projection } from 'ember-flexberry-data';
import {
  Model as ClientMixin,
  defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-client';

let Model = Projection.Model.extend(ClientMixin);

defineProjections(Model);

export default Model;
