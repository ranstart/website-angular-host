export const environment = {
  production: true,
  hmr: false,
  application: {
    name: '管理',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://{TENANCY_NAME}',
    clientId: 'Site_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Site',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'http://{TENANCY_NAME}'
    },
  },
  localization: {
    defaultResourceName: 'Blogging',
  },
};
