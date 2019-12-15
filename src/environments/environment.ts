export const environment = {
  production: false,
  hmr: false,
  application: {
    name: '青橙汽车自媒体平台',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44385',
    clientId: 'Publish_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Publish',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44385',
    },
  },
  localization: {
    defaultResourceName: 'Blogging',
  },
};
