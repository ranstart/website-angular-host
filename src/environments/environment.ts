export const environment = {
  production: false,
  hmr: false,
  application: {
    name: '扉旅汽车',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer:  window.location.origin,
    clientId: 'Blogging_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Blogging',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false,
  },
  apis: {
    default: {
      url:  window.location.origin,
    },
  },
  localization: {
    defaultResourceName: 'Blogging',
  },
};
