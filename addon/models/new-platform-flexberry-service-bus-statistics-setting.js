import { Projection } from 'ember-flexberry-data';
import {
  Model as StatisticsSettingMixin,
  defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-statistics-setting';

let Model = Projection.Model.extend(StatisticsSettingMixin);

defineProjections(Model);

export default Model;
