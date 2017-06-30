import ListFormController from 'ember-flexberry/controllers/list-form';

export default ListFormController.extend({
  /**
    Name of related edit form route.

    @property editFormRoute
    @type String
    @default 'new-platform-flexberry-service-bus-statistics-monitor-edit-form'
  */
  editFormRoute: 'new-platform-flexberry-service-bus-statistics-monitor-edit-form',

  getCellComponent(attr, bindingPath) {
    let cellComponent = this._super(...arguments);
    if (bindingPath === 'public') {
      cellComponent.componentName = 'flexberry-checkbox';
      cellComponent.componentProperties = { readonly: true };
    }

    return cellComponent;
  },
});
