// import all pages routes
import routesMain from '@/pages/main/routes'

// import modules configuration
import modulesConfig from '@/../config/modules.json'

// import mdi icons fpr vuetify
//import '@mdi/font/css/materialdesignicons.css'

// @ts-ignore
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi.mjs'

// todo fix this import in boot.ts during `npm run build`
// (with `npm run serve` it works correctly)
import(`@/assets/themes/default/app.scss`)

export default {
  debug: false,

  // owd theme
  theme: import.meta.env.VUE_APP_THEME,

  // owd routes
  routes: [
    routesMain
  ],

  // owd modules
  modules: modulesConfig,

  // owd sse integration
  sse: {
    enabled: false,
    server: '',
    reconnectOnError: true,
    reconnectTimeout: 5000
  },

  // owd desktop
  desktop: {
    Logo: {
      options: {
        enabled: true
      }
    },
    SystemBar: {
      modules: [
        'ApplicationMenu',
        'NotificationMenu',
        'StatusMenu'
      ],
      options: {
        enabled: true,
        position: 'top',
        modules: {
          ApplicationMenu: {
            categoryAppsTriggerType: 'mouseover'
          },
          NotificationMenu: {
            menu: {
              dateFormat: 'MMM D',
              timeFormat: 'HH:mm'
            },
            calendar: {
              header: {
                dayOfWeekFormat: 'dddd',
                dateFormat: 'MMMM D YYYY'
              }
            },
            floatingNotification: {
              max: 2,
              duration: 8000
            }
          }
        }
      }
    }
  },

  // owd icons
  icons: {
    window: {
      minimize: 'mdi-window-minimize',
      maximize: 'mdi-window-maximize',
      fullscreen: 'mdi-fullscreen',
      close: 'mdi-window-close',
      external: 'mdi-open-in-new'
    },
    systemBar: {
      'battery': 'mdi-battery',
      'battery-0': 'mdi-battery-alert-variant-outline',
      'battery-20': 'mdi-battery-20',
      'battery-40': 'mdi-battery-40',
      'battery-60': 'mdi-battery-60',
      'battery-80': 'mdi-battery-80',
      'battery-100': 'mdi-battery'
    }
  },

  // vuetify config
  vuetify: {
    theme: {
      defaultTheme: 'dark',
      options: { customProperties: true },
      themes: {
        light: {
          variables: {
            primary: '#4987c1',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c'
          }
        },
        dark: {
          variables: {
            primary: '#4987c1',
            secondary: '#b0bec5',
            accent: '#8c9eff',
            error: '#b71c1c'
          }
        }
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    },
    rtl: false
  }
}