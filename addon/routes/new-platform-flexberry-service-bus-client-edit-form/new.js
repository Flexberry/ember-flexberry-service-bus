import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'EditView',
  modelName: 'new-platform-flexberry-service-bus-client',
  templateName: 'new-platform-flexberry-service-bus-client-edit-form',
  controllerName: 'new-platform-flexberry-service-bus-client-edit-form',

  developerUserSettings: {
    subscriptionsGroupEdit: {
      DEFAULT: {
        columnWidths: [
          { propName: 'OlvRowToolbar', fixed: true, width: 65 },
          { propName: 'isCallback', width: 80 },
        ],
      },
    },
    sendingPermissionsGroupEdit: {
      DEFAULT: {
        columnWidths: [
          { propName: 'OlvRowToolbar', fixed: true, width: 65 },
        ],
      },
    },
  },
});
