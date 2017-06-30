import { Projection } from 'ember-flexberry-data';
import {
  Model as SubscriptionMixin, defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-subscription';

let Model = Projection.Model.extend(SubscriptionMixin);

defineProjections(Model);

export default Model;
