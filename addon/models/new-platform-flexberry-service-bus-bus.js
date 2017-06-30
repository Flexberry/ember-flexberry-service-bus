import ClientModel from './new-platform-flexberry-service-bus-client';
import {
  Model as BusMixin,
  defineProjections,
  defineBaseModel
} from '../mixins/regenerated/models/new-platform-flexberry-service-bus-bus';

let Model = ClientModel.extend(BusMixin);

defineBaseModel(Model);
defineProjections(Model);

export default Model;
