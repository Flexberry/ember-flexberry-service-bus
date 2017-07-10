import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import ClientListFormForm from './forms/new-platform-flexberry-service-bus-client-list-form';
import MessageListFormForm from './forms/new-platform-flexberry-service-bus-message-list-form';
import MessageTypeListFormForm from './forms/new-platform-flexberry-service-bus-message-type-list-form';
import StatisticsCompressionSettingListFormForm from './forms/new-platform-flexberry-service-bus-statistics-compression-setting-list-form';
import StatisticsMonitorListFormForm from './forms/new-platform-flexberry-service-bus-statistics-monitor-list-form';
import StatisticsRecordListFormForm from './forms/new-platform-flexberry-service-bus-statistics-record-list-form';
import StatisticsSettingListFormForm from './forms/new-platform-flexberry-service-bus-statistics-setting-list-form';
import SubscriptionListFormForm from './forms/new-platform-flexberry-service-bus-subscription-list-form';
import ClientEditFormForm from './forms/new-platform-flexberry-service-bus-client-edit-form';
import MessageEditFormForm from './forms/new-platform-flexberry-service-bus-message-edit-form';
import MessageTypeEditFormForm from './forms/new-platform-flexberry-service-bus-message-type-edit-form';
import StatisticsCompressionSettingEditFormForm from './forms/new-platform-flexberry-service-bus-statistics-compression-setting-edit-form';
import StatisticsMonitorEditFormForm from './forms/new-platform-flexberry-service-bus-statistics-monitor-edit-form';
import StatisticsRecordEditFormForm from './forms/new-platform-flexberry-service-bus-statistics-record-edit-form';
import StatisticsSettingEditFormForm from './forms/new-platform-flexberry-service-bus-statistics-setting-edit-form';
import SubscriptionEditFormForm from './forms/new-platform-flexberry-service-bus-subscription-edit-form';
import BusModel from './models/new-platform-flexberry-service-bus-bus';
import ClientModel from './models/new-platform-flexberry-service-bus-client';
import MessageTypeModel from './models/new-platform-flexberry-service-bus-message-type';
import MessageModel from './models/new-platform-flexberry-service-bus-message';
import SendingPermissionModel from './models/new-platform-flexberry-service-bus-sending-permission';
import StatisticsCompressionSettingModel from './models/new-platform-flexberry-service-bus-statistics-compression-setting';
import StatisticsMonitorModel from './models/new-platform-flexberry-service-bus-statistics-monitor';
import StatisticsRecordModel from './models/new-platform-flexberry-service-bus-statistics-record';
import StatisticsSettingModel from './models/new-platform-flexberry-service-bus-statistics-setting';
import SubscriptionStatisticsMonitorModel from './models/new-platform-flexberry-service-bus-subscription-statistics-monitor';
import SubscriptionModel from './models/new-platform-flexberry-service-bus-subscription';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'new-platform-flexberry-service-bus-bus': BusModel,
    'new-platform-flexberry-service-bus-client': ClientModel,
    'new-platform-flexberry-service-bus-message-type': MessageTypeModel,
    'new-platform-flexberry-service-bus-message': MessageModel,
    'new-platform-flexberry-service-bus-sending-permission': SendingPermissionModel,
    'new-platform-flexberry-service-bus-statistics-compression-setting': StatisticsCompressionSettingModel,
    'new-platform-flexberry-service-bus-statistics-monitor': StatisticsMonitorModel,
    'new-platform-flexberry-service-bus-statistics-record': StatisticsRecordModel,
    'new-platform-flexberry-service-bus-statistics-setting': StatisticsSettingModel,
    'new-platform-flexberry-service-bus-subscription-statistics-monitor': SubscriptionStatisticsMonitorModel,
    'new-platform-flexberry-service-bus-subscription': SubscriptionModel,
  },

  forms: {
    application: {
      sitemap: {
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
          },
        },
        state: {
          caption: 'State',
          title: 'State',
          'new-platform-flexberry-service-bus-message-list-form': {
            caption: 'Messages',
            title: '',
          },
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
          },
        },
      },
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed',
    },

    'new-platform-flexberry-service-bus-client-list-form': ClientListFormForm,
    'new-platform-flexberry-service-bus-message-list-form': MessageListFormForm,
    'new-platform-flexberry-service-bus-message-type-list-form': MessageTypeListFormForm,
    'new-platform-flexberry-service-bus-statistics-compression-setting-list-form': StatisticsCompressionSettingListFormForm,
    'new-platform-flexberry-service-bus-statistics-monitor-list-form': StatisticsMonitorListFormForm,
    'new-platform-flexberry-service-bus-statistics-record-list-form': StatisticsRecordListFormForm,
    'new-platform-flexberry-service-bus-statistics-setting-list-form': StatisticsSettingListFormForm,
    'new-platform-flexberry-service-bus-subscription-list-form': SubscriptionListFormForm,
    'new-platform-flexberry-service-bus-client-edit-form': ClientEditFormForm,
    'new-platform-flexberry-service-bus-message-edit-form': MessageEditFormForm,
    'new-platform-flexberry-service-bus-message-type-edit-form': MessageTypeEditFormForm,
    'new-platform-flexberry-service-bus-statistics-compression-setting-edit-form': StatisticsCompressionSettingEditFormForm,
    'new-platform-flexberry-service-bus-statistics-monitor-edit-form': StatisticsMonitorEditFormForm,
    'new-platform-flexberry-service-bus-statistics-record-edit-form': StatisticsRecordEditFormForm,
    'new-platform-flexberry-service-bus-statistics-setting-edit-form': StatisticsSettingEditFormForm,
    'new-platform-flexberry-service-bus-subscription-edit-form': SubscriptionEditFormForm,
  },

});

export default translations;
