import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'new-platform-flexberry-service-bus-statistics-monitor-list-form',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'new-platform-flexberry-service-bus-subscription-statistics-monitor+subscription':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            chooseText: '...',
            remove: 'removeLookupValue',
            displayAttributeName: 'description',
            required: true,
            relationName: 'subscription',
            projection: 'LookupView',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
