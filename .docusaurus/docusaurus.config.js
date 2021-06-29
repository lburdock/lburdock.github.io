export default {
  "title": "Lauren Burdock",
  "tagline": "Senior Front End Engineer",
  "url": "https://lburdock.github.io/",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "lburdock",
  "projectName": "lburdock.github.io",
  "themeConfig": {
    "hideableSidebar": true,
    "navbar": {
      "logo": {
        "alt": "Lauren Burdock",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "type": "doc",
          "docId": "js-test",
          "position": "left",
          "label": "Cheatsheets",
          "activeSidebarClassName": "navbar__link--active"
        },
        {
          "href": "https://github.com/lburdock",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/burdock/Projects/lburdock.github.io/sidebars.js"
        },
        "blog": {
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/Users/burdock/Projects/lburdock.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/icon?family=Material+Icons"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};