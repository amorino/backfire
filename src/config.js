const stagingRoute = ''
const stagingURL = `http://amorino.com/${stagingRoute}`
const productionRoute = ''
const productionURL = `http://amorino.com/${productionRoute}`
const developmentRoute = ''
const developmentURL = `http://amorino.com/${developmentRoute}`

const config = {
  locale: 'en-US',
  data: false,
  assets: false,
  facebook_permissions: 'email',
  apis: {
    facebook: false,
    twitter: false,
    google: false,
  },
  vars: {
    animate: false,
    resize: true,
  },
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
        fb: 'xxxxxxxxx',
        ga: 'UA-000000-01',
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
        fb: 'xxxxxxxxx',
        ga: 'UA-000000-01',
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
        fb: 'xxxxxxxxx',
        ga: 'UA-000000-01',
        gp: 'xxxxxxxxx',
      },
    },
  },
}

let env
const host = document.location.host

switch (host.split(':').shift()) {
  case 'amorino.com':
    env = 'staging'
    break
  case 'production.com':
    env = 'production'
    break
  default:
    env = 'development'
    break
}

const environment = config.environments[env]

module.exports = {
  config,
  environment,
}
