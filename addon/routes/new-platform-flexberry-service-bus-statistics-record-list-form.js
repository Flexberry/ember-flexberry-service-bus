import ListFormRoute from 'ember-flexberry/routes/list-form';

export default ListFormRoute.extend({
  /**
    Name of model projection to be used as record's properties limitation.

    @property modelProjection
    @type String
    @default 'ListView'
  */
  modelProjection: 'ListView',

  /**
    Name of model to be used as list's records types.

    @property modelName
    @type String
    @default 'new-platform-flexberry-service-bus-statistics-record'
  */
  modelName: 'new-platform-flexberry-service-bus-statistics-record',

  /**
    Defined user settings developer.
    For default userSetting use empty name ('').
    Property `<componentName>` may contain any of properties: `colsOrder`, `sorting`, `colsWidth` or being empty.

    ```javascript
    {
      <componentName>: {
        <settingName>: {
          colsOrder: [ { propName :<colName>, hide: true|false }, ... ],
          sorting: [{ propName: <colName>, direction: "asc"|"desc" }, ... ],
          colsWidths: [ <colName>:<colWidth>, ... ],
        },
        ...
      },
      ...
    }
    ```

    @property developerUserSettings
    @type Object
    @default {}
  */
  developerUserSettings: {
    NewPlatformFlexberryServiceBusStatisticsRecordListForm: {
      DEFAULT: {
        columnWidths: [
          { propName: 'OlvRowToolbar', fixed: true, width: 90 },
        ],
      },
    },
  },
});