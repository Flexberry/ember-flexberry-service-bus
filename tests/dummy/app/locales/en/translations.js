import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';
import EmberFlexberryServiceBusTranslations from 'ember-flexberry-service-bus/locales/en/translations';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations, EmberFlexberryServiceBusTranslations);

Ember.$.extend(true, translations, {
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
          },
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        },
      },

      footer: {
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry-service-bus addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
      },

      sitemap: {
        index: {
          caption: 'Home',
          title: ''
        },
      },
    },
  },

});

export default translations;
