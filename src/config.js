const stagingRoute = 'clients/foo/'
const stagingURL = `http://amorino.com/${stagingRoute}`
const productionRoute = 'clients/foo/'
const productionURL = `http://amorino.com/${productionRoute}`
const developmentRoute = ''
const developmentURL = `http://amorino.com/${developmentRoute}`

const config = {
  locale: 'en-US',
  analytics: 'google',
  data_loading: true,
  asset_loading: true,
  facebook_permissions: 'email',
  apis: {
    facebook: false,
    twitter: false,
    google: false,
  },
  vars: {
    animate: true,
    resize: true,
  },
  urls: {},
  environments: {
    production: {
      vars: {
        base: productionURL,
        route: productionRoute,
        debug: false,
      },
      urls: {
        api: `${productionURL}endpoint/`,
      },
      properties: {
        fb: '1495584274016685',
        ga: 'ua2423423',
        gp: 'xxxxxxxxx',
      },
    },
    staging: {
      vars: {
        base: stagingURL,
        route: stagingRoute,
        debug: true,
      },
      urls: {
        api: `${stagingURL}endpoint/`,
      },
      properties: {
        fb: '1495584274016685',
        ga: 'ua2423423',
        gp: 'xxxxxxxxx',
      },
    },
    development: {
      vars: {
        base: developmentURL,
        route: developmentRoute,
        debug: true,
      },
      urls: {
        api: `${developmentURL}endpoint/`,
      },
      properties: {
        fb: '1495584274016685',
        ga: 'ua2423423',
        gp: 'xxxxxxxxx',
      },
    },
  },
}

let env = 'development'
const host = document.location.host

switch (host.split(':').shift()) {
  case 'localhost':
    {
      env = 'development'
      break
    }

  case 'amorino.com':
    {
      env = 'staging'
      break
    }

  case 'production.com':
    {
      env = 'production'
      break
    }
  default:
    {
      env = 'development'
      break
    }
}

const environment = config.environments[env]

module.exports = {
  config,
  environment,
}
