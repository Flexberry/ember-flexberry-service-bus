import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import NewPlatformFlexberryServiceBusClientListFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-client-list-form';
import NewPlatformFlexberryServiceBusMessageListFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-message-list-form';
import NewPlatformFlexberryServiceBusMessageTypeListFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-message-type-list-form';
import NewPlatformFlexberryServiceBusStatisticsCompressionSettingListFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-statistics-compression-setting-list-form';
import NewPlatformFlexberryServiceBusStatisticsMonitorListFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-statistics-monitor-list-form';
import NewPlatformFlexberryServiceBusStatisticsRecordListFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-statistics-record-list-form';
import NewPlatformFlexberryServiceBusStatisticsSettingListFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-statistics-setting-list-form';
import NewPlatformFlexberryServiceBusSubscriptionListFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-subscription-list-form';
import NewPlatformFlexberryServiceBusClientEditFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-client-edit-form';
import NewPlatformFlexberryServiceBusMessageEditFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-message-edit-form';
import NewPlatformFlexberryServiceBusMessageTypeEditFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-message-type-edit-form';
import NewPlatformFlexberryServiceBusStatisticsCompressionSettingEditFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-statistics-compression-setting-edit-form';
import NewPlatformFlexberryServiceBusStatisticsMonitorEditFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-statistics-monitor-edit-form';
import NewPlatformFlexberryServiceBusStatisticsRecordEditFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-statistics-record-edit-form';
import NewPlatformFlexberryServiceBusStatisticsSettingEditFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-statistics-setting-edit-form';
import NewPlatformFlexberryServiceBusSubscriptionEditFormForm from
  'ember-flexberry-service-bus/locales/ru/forms/new-platform-flexberry-service-bus-subscription-edit-form';
import NewPlatformFlexberryServiceBusBusModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-bus';
import NewPlatformFlexberryServiceBusClientModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-client';
import NewPlatformFlexberryServiceBusMessageTypeModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-message-type';
import NewPlatformFlexberryServiceBusMessageModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-message';
import NewPlatformFlexberryServiceBusSendingPermissionModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-sending-permission';
import NewPlatformFlexberryServiceBusStatisticsCompressionSettingModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-statistics-compression-setting';
import NewPlatformFlexberryServiceBusStatisticsMonitorModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-statistics-monitor';
import NewPlatformFlexberryServiceBusStatisticsRecordModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-statistics-record';
import NewPlatformFlexberryServiceBusStatisticsSettingModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-statistics-setting';
import NewPlatformFlexberryServiceBusSubscriptionStatisticsMonitorModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-subscription-statistics-monitor';
import NewPlatformFlexberryServiceBusSubscriptionModel from
  'ember-flexberry-service-bus/locales/ru/models/new-platform-flexberry-service-bus-subscription';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry-service-bus, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry-service-bus, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        routing: {
          caption: 'Маршрутизация',
          title: 'Маршрутизация',
          'new-platform-flexberry-service-bus-client-list-form': {
            caption: 'Клиенты',
            title: '',

          },
          'new-platform-flexberry-service-bus-message-type-list-form': {
            caption: 'Типы сообщений',
            title: '',

          },
          'new-platform-flexberry-service-bus-subscription-list-form': {
            caption: 'Подписки',
            title: '',

          }
        },
        state: {
          caption: 'Состояние',
          title: 'Состояние',
          'new-platform-flexberry-service-bus-message-list-form': {
            caption: 'Сообщения',
            title: '',

          }
        },
        statistics: {
          caption: 'Статистика',
          title: 'Статистика',
          'new-platform-flexberry-service-bus-statistics-monitor-list-form': {
            caption: 'Настройки мониторов статистики',
            title: '',

          },
          'new-platform-flexberry-service-bus-statistics-record-list-form': {
            caption: 'Записи статистики',
            title: '',

          },
          'new-platform-flexberry-service-bus-statistics-setting-list-form': {
            caption: 'Настройки регистрации статистики',
            title: '',

          },
          'new-platform-flexberry-service-bus-statistics-compression-setting-list-form': {
            caption: 'Настройки сжатия статистики',
            title: '',

          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
