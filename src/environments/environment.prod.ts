export const environment = {
  production: false,
  hmr: false,
  application: {
    name: '青橙汽车自媒体平台',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: '//host.limeauto.com.cn',
    clientId: 'Publish_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'Publish',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: '//host.limeauto.com.cn',
    },
  },
  localization: {
    defaultResourceName: 'Blogging',
  },
};
