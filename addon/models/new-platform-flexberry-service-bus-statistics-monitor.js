import { Projection } from 'ember-flexberry-data';
import {
  Model as StatisticsMonitorMixin,
  defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-statistics-monitor';

let Model = Projection.Model.extend(StatisticsMonitorMixin);

defineProjections(Model);

export default Model;
