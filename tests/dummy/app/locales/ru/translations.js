import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';
import EmberFlexberryServiceBusTranslations from 'ember-flexberry-service-bus/locales/ru/translations';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations, EmberFlexberryServiceBusTranslations);

Ember.$.extend(true, translations, {
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
          },
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        },
      },

      footer: {
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry-service-bus, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
      },

      sitemap: {
        index: {
          caption: 'Главная',
          title: ''
        },
      },
    },
  },

});

export default translations;
