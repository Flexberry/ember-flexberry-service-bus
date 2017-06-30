import EditFormNewRoute from 'ember-flexberry/routes/edit-form-new';

export default EditFormNewRoute.extend({
  modelProjection: 'EditView',
  modelName: 'new-platform-flexberry-service-bus-statistics-monitor',
  templateName: 'new-platform-flexberry-service-bus-statistics-monitor-edit-form',
  controllerName: 'new-platform-flexberry-service-bus-statistics-monitor-edit-form',

  developerUserSettings: {
    subscriptionStatisticsMonitorGroupEdit: {
      DEFAULT: {
        columnWidths: [
          { propName: 'OlvRowToolbar', fixed: true, width: 65 },
          { propName: 'number', width: 120 },
        ],
      },
    },
  },
});
