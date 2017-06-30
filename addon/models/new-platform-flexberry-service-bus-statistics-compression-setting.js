import { Projection } from 'ember-flexberry-data';
import {
  Model as StatisticsCompressionSettingMixin, defineProjections
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-statistics-compression-setting';

let Model = Projection.Model.extend(StatisticsCompressionSettingMixin);

defineProjections(Model);

export default Model;
