import EditFormRoute from 'ember-flexberry/routes/edit-form';

export default EditFormRoute.extend({
  modelProjection: 'EditView',
  modelName: 'new-platform-flexberry-service-bus-client',

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
