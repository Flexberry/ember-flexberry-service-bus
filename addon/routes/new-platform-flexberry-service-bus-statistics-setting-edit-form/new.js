import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'EditView',
  modelName: 'new-platform-flexberry-service-bus-statistics-setting',
  templateName: 'new-platform-flexberry-service-bus-statistics-setting-edit-form',
  controllerName: 'new-platform-flexberry-service-bus-statistics-setting-edit-form',

  developerUserSettings: {
    statisticsCompressionSettingGroupEdit: {
      DEFAULT: {
        columnWidths: [
          { propName: 'OlvRowToolbar', fixed: true, width: 65 },
        ],
      },
    },
    statisticsRecordGroupEdit: {
      DEFAULT: {
        columnWidths: [
          { propName: 'OlvRowToolbar', fixed: true, width: 65 },
        ],
      },
    },
  },
});
