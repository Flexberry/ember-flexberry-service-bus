import EditFormRoute from 'ember-flexberry/routes/edit-form';

export default EditFormRoute.extend({
  modelProjection: 'EditView',
  modelName: 'new-platform-flexberry-service-bus-statistics-setting',

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
