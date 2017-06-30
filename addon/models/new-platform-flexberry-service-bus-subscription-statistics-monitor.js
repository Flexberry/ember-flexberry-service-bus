import { Projection } from 'ember-flexberry-data';
import {
  Model as SubscriptionStatisticsMonitorMixin,
  defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-subscription-statistics-monitor';

let Model = Projection.Model.extend(SubscriptionStatisticsMonitorMixin);

defineProjections(Model);

export default Model;
