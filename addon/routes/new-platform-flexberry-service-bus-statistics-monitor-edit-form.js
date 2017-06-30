import EditFormRoute from 'ember-flexberry/routes/edit-form';

export default EditFormRoute.extend({
  modelProjection: 'EditView',
  modelName: 'new-platform-flexberry-service-bus-statistics-monitor',

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
