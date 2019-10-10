export const environment = {
  production: true,
  hmr: false,
  application: {
    name: '扉旅汽车',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://feelauto.com.cn',
    clientId: 'Site_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Site',
    showDebugInformation: true,
    oidc: false,
    requireHttps: false,
  },
  apis: {
    default: {
      url: 'http://feelauto.com.cn'
    },
  },
  localization: {
    defaultResourceName: 'Site',
  },
};
