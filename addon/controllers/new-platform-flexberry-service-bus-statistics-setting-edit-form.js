import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'new-platform-flexberry-service-bus-statistics-setting-list-form',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (bindingPath === 'since' || bindingPath === 'to') {
      cellComponent.componentName = 'object-list-view-cell';
      cellComponent.componentProperties = { dateFormat: 'DD.MM.YYYY hh:mm:ss' };
    } else if (bindingPath === 'nextCompressTime' || bindingPath === 'lastCompressTime') {
      cellComponent.componentName = 'flexberry-simpledatetime';
      cellComponent.componentProperties = { type: 'datetime' };
      if (bindingPath === 'lastCompressTime') {
        cellComponent.componentProperties.readonly = true;
        cellComponent.componentProperties.canClick = false;
      }
    } else if (model.modelName === 'new-platform-flexberry-service-bus-statistics-record') {
      cellComponent.componentName = undefined;
      cellComponent.componentProperties = null;
    }

    return cellComponent;
  },
});
