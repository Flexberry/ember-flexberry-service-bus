import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'new-platform-flexberry-service-bus-client-list-form',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'new-platform-flexberry-service-bus-subscription+messageType':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            chooseText: '...',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'messageType',
            projection: 'ListView',
            autocomplete: true,
          };
          break;

        case 'new-platform-flexberry-service-bus-sending-permission+messageType':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            chooseText: '...',
            remove: 'removeLookupValue',
            displayAttributeName: 'name',
            required: true,
            relationName: 'messageType',
            projection: 'ListView',
            autocomplete: true,
          };
          break;

      }
    }

    if (bindingPath === 'expiryDate') {
      cellComponent.componentName = 'flexberry-simpledatetime';
      cellComponent.componentProperties = { type: 'datetime' };
    }

    return cellComponent;
  },
});
