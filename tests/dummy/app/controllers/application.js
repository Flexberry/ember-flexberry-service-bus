import Ember from 'ember';
import config from '../config/environment';

const version = config.APP.version;

export default Ember.Controller.extend({
  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: Ember.inject.service('objectlistview-events'),

  /**
    Currernt addon version.

    @property addonVersion
    @type String
  */
  addonVersion: version,

  /**
    Link to GitHub commit related to current addon version.

    @property addonVersionHref
    @type String
  */
  addonVersionHref: Ember.computed('addonVersion', function() {
    let addonVersion = this.get('addonVersion');
    let commitSha = addonVersion.split('+')[1];

    return 'https://github.com/Flexberry/ember-flexberry-service-bus/commit/' + commitSha;
  }),

  sitemap: Ember.computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.routing.caption'),
          title: i18n.t('forms.application.sitemap.routing.title'),
          children: [{
            link: 'new-platform-flexberry-service-bus-client-list-form',
            caption: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-client-list-form.caption'),
            title: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-client-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-message-type-list-form',
            caption: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-message-type-list-form.caption'),
            title: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-message-type-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-subscription-list-form',
            caption: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-subscription-list-form.caption'),
            title: i18n.t('forms.application.sitemap.routing.new-platform-flexberry-service-bus-subscription-list-form.title'),
            children: null
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.state.caption'),
          title: i18n.t('forms.application.sitemap.state.title'),
          children: [{
            link: 'new-platform-flexberry-service-bus-message-list-form',
            caption: i18n.t('forms.application.sitemap.state.new-platform-flexberry-service-bus-message-list-form.caption'),
            title: i18n.t('forms.application.sitemap.state.new-platform-flexberry-service-bus-message-list-form.title'),
            children: null
          }]
        }, {
          link: null,
          caption: i18n.t('forms.application.sitemap.statistics.caption'),
          title: i18n.t('forms.application.sitemap.statistics.title'),
          children: [{
            link: 'new-platform-flexberry-service-bus-statistics-monitor-list-form',
            caption: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-monitor-list-form.caption'),
            title: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-monitor-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-statistics-record-list-form',
            caption: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-record-list-form.caption'),
            title: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-record-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-statistics-setting-list-form',
            caption: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-setting-list-form.caption'),
            title: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-setting-list-form.title'),
            children: null
          }, {
            link: 'new-platform-flexberry-service-bus-statistics-compression-setting-list-form',
            caption: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-compression-setting-list-form.caption'),
            title: i18n.t('forms.application.sitemap.statistics.new-platform-flexberry-service-bus-statistics-compression-setting-list-form.title'),
            children: null
          }]
        }
      ]
    };
  }),

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: ['ru', 'en'],

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = Ember.$('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        Ember.$('.bgw-opacity').addClass('hidden');
        Ember.$('.full.height').css({ transition: 'width 0.45s ease-in-out 0s', width: '100%' });
      } else {
        Ember.$('.sidebar.icon.text-menu-show').addClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').removeClass('hidden');
        Ember.$('.bgw-opacity').removeClass('hidden');
        Ember.$('.full.height').css({ transition: 'width 0.3s ease-in-out 0s', width: 'calc(100% - ' + sidebar.width() + 'px)' });
      }
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      Ember.$('.ui.sidebar.main.menu').sidebar('toggle');

      if (Ember.$('.inverted.vertical.main.menu').hasClass('visible')) {
        Ember.$('.sidebar.icon.text-menu-show').removeClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').addClass('hidden');
        Ember.$('.bgw-opacity').addClass('hidden');
      } else {
        Ember.$('.sidebar.icon.text-menu-show').addClass('hidden');
        Ember.$('.sidebar.icon.text-menu-hide').removeClass('hidden');
        Ember.$('.bgw-opacity').removeClass('hidden');
      }
    }
  },

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (Ember.isNone(i18n)) {
      return;
    }

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = Ember.A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.contains(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },
});
