import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import NewPlatformFlexberryServiceBusClientListFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-client-list-form';
import NewPlatformFlexberryServiceBusMessageListFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-message-list-form';
import NewPlatformFlexberryServiceBusMessageTypeListFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-message-type-list-form';
import NewPlatformFlexberryServiceBusStatisticsCompressionSettingListFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-statistics-compression-setting-list-form';
import NewPlatformFlexberryServiceBusStatisticsMonitorListFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-statistics-monitor-list-form';
import NewPlatformFlexberryServiceBusStatisticsRecordListFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-statistics-record-list-form';
import NewPlatformFlexberryServiceBusStatisticsSettingListFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-statistics-setting-list-form';
import NewPlatformFlexberryServiceBusSubscriptionListFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-subscription-list-form';
import NewPlatformFlexberryServiceBusClientEditFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-client-edit-form';
import NewPlatformFlexberryServiceBusMessageEditFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-message-edit-form';
import NewPlatformFlexberryServiceBusMessageTypeEditFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-message-type-edit-form';
import NewPlatformFlexberryServiceBusStatisticsCompressionSettingEditFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-statistics-compression-setting-edit-form';
import NewPlatformFlexberryServiceBusStatisticsMonitorEditFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-statistics-monitor-edit-form';
import NewPlatformFlexberryServiceBusStatisticsRecordEditFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-statistics-record-edit-form';
import NewPlatformFlexberryServiceBusStatisticsSettingEditFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-statistics-setting-edit-form';
import NewPlatformFlexberryServiceBusSubscriptionEditFormForm from
  'ember-flexberry-service-bus/locales/en/forms/new-platform-flexberry-service-bus-subscription-edit-form';
import NewPlatformFlexberryServiceBusBusModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-bus';
import NewPlatformFlexberryServiceBusClientModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-client';
import NewPlatformFlexberryServiceBusMessageTypeModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-message-type';
import NewPlatformFlexberryServiceBusMessageModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-message';
import NewPlatformFlexberryServiceBusSendingPermissionModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-sending-permission';
import NewPlatformFlexberryServiceBusStatisticsCompressionSettingModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-statistics-compression-setting';
import NewPlatformFlexberryServiceBusStatisticsMonitorModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-statistics-monitor';
import NewPlatformFlexberryServiceBusStatisticsRecordModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-statistics-record';
import NewPlatformFlexberryServiceBusStatisticsSettingModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-statistics-setting';
import NewPlatformFlexberryServiceBusSubscriptionStatisticsMonitorModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-subscription-statistics-monitor';
import NewPlatformFlexberryServiceBusSubscriptionModel from
  'ember-flexberry-service-bus/locales/en/models/new-platform-flexberry-service-bus-subscription';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'new-platform-flexberry-service-bus-bus': NewPlatformFlexberryServiceBusBusModel,
    'new-platform-flexberry-service-bus-client': NewPlatformFlexberryServiceBusClientModel,
    'new-platform-flexberry-service-bus-message-type': NewPlatformFlexberryServiceBusMessageTypeModel,
    'new-platform-flexberry-service-bus-message': NewPlatformFlexberryServiceBusMessageModel,
    'new-platform-flexberry-service-bus-sending-permission': NewPlatformFlexberryServiceBusSendingPermissionModel,
    'new-platform-flexberry-service-bus-statistics-compression-setting': NewPlatformFlexberryServiceBusStatisticsCompressionSettingModel,
    'new-platform-flexberry-service-bus-statistics-monitor': NewPlatformFlexberryServiceBusStatisticsMonitorModel,
    'new-platform-flexberry-service-bus-statistics-record': NewPlatformFlexberryServiceBusStatisticsRecordModel,
    'new-platform-flexberry-service-bus-statistics-setting': NewPlatformFlexberryServiceBusStatisticsSettingModel,
    'new-platform-flexberry-service-bus-subscription-statistics-monitor': NewPlatformFlexberryServiceBusSubscriptionStatisticsMonitorModel,
    'new-platform-flexberry-service-bus-subscription': NewPlatformFlexberryServiceBusSubscriptionModel,
  },

  'application-name': 'Flexberry Service Bus',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry-service-bus addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry-service-bus addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        routing: {
          caption: 'Routing',
          title: 'Routing',
          'new-platform-flexberry-service-bus-client-list-form': {
            caption: 'Clients',
            title: '',

          },
          'new-platform-flexberry-service-bus-message-type-list-form': {
            caption: 'Message types',
            title: '',

          },
          'new-platform-flexberry-service-bus-subscription-list-form': {
            caption: 'Subscriptions',
            title: '',

          }
        },
        state: {
          caption: 'State',
          title: 'State',
          'new-platform-flexberry-service-bus-message-list-form': {
            caption: 'Messages',
            title: '',

          }
        },
        statistics: {
          caption: 'Statistics',
          title: 'Statistics',
          'new-platform-flexberry-service-bus-statistics-monitor-list-form': {
            caption: 'Settings statistics monitors',
            title: '',

          },
          'new-platform-flexberry-service-bus-statistics-record-list-form': {
            caption: 'Statistics records',
            title: '',

          },
          'new-platform-flexberry-service-bus-statistics-setting-list-form': {
            caption: 'Statistics settings',
            title: '',

          },
          'new-platform-flexberry-service-bus-statistics-compression-setting-list-form': {
            caption: 'Statistics compression settings',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'new-platform-flexberry-service-bus-client-list-form': NewPlatformFlexberryServiceBusClientListFormForm,
    'new-platform-flexberry-service-bus-message-list-form': NewPlatformFlexberryServiceBusMessageListFormForm,
    'new-platform-flexberry-service-bus-message-type-list-form': NewPlatformFlexberryServiceBusMessageTypeListFormForm,
    'new-platform-flexberry-service-bus-statistics-compression-setting-list-form': NewPlatformFlexberryServiceBusStatisticsCompressionSettingListFormForm,
    'new-platform-flexberry-service-bus-statistics-monitor-list-form': NewPlatformFlexberryServiceBusStatisticsMonitorListFormForm,
    'new-platform-flexberry-service-bus-statistics-record-list-form': NewPlatformFlexberryServiceBusStatisticsRecordListFormForm,
    'new-platform-flexberry-service-bus-statistics-setting-list-form': NewPlatformFlexberryServiceBusStatisticsSettingListFormForm,
    'new-platform-flexberry-service-bus-subscription-list-form': NewPlatformFlexberryServiceBusSubscriptionListFormForm,
    'new-platform-flexberry-service-bus-client-edit-form': NewPlatformFlexberryServiceBusClientEditFormForm,
    'new-platform-flexberry-service-bus-message-edit-form': NewPlatformFlexberryServiceBusMessageEditFormForm,
    'new-platform-flexberry-service-bus-message-type-edit-form': NewPlatformFlexberryServiceBusMessageTypeEditFormForm,
    'new-platform-flexberry-service-bus-statistics-compression-setting-edit-form': NewPlatformFlexberryServiceBusStatisticsCompressionSettingEditFormForm,
    'new-platform-flexberry-service-bus-statistics-monitor-edit-form': NewPlatformFlexberryServiceBusStatisticsMonitorEditFormForm,
    'new-platform-flexberry-service-bus-statistics-record-edit-form': NewPlatformFlexberryServiceBusStatisticsRecordEditFormForm,
    'new-platform-flexberry-service-bus-statistics-setting-edit-form': NewPlatformFlexberryServiceBusStatisticsSettingEditFormForm,
    'new-platform-flexberry-service-bus-subscription-edit-form': NewPlatformFlexberryServiceBusSubscriptionEditFormForm,
  },

});

export default translations;
