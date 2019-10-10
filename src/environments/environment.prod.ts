export const environment = {
  production: true,
  hmr: false,
  application: {
    name: '深圳天闻',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://shenzhentianwen.com',
    clientId: 'Site_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Site',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'http://shenzhentianwen.com'
    },
  },
  localization: {
    defaultResourceName: 'Site',
  },
};
