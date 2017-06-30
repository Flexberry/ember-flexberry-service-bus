import ListFormController from 'ember-flexberry/controllers/list-form';

export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'new-platform-flexberry-service-bus-statistics-compression-setting-edit-form'
  */
  editFormRoute: 'new-platform-flexberry-service-bus-statistics-compression-setting-edit-form',

  getCellComponent(attr, bindingPath) {
    let cellComponent = this._super(...arguments);
    if (bindingPath === 'nextCompressTime' || bindingPath === 'lastCompressTime') {
      cellComponent.componentName = 'object-list-view-cell';
      cellComponent.componentProperties = { dateFormat: 'DD.MM.YYYY hh:mm:ss' };
    }

    return cellComponent;
  },
});
