import { Projection } from 'ember-flexberry-data';
import {
  Model as StatisticsRecordMixin, defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-statistics-record';

let Model = Projection.Model.extend(StatisticsRecordMixin);

defineProjections(Model);

export default Model;
