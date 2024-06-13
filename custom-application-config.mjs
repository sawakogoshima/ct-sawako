import { PERMISSIONS, entryPointUriPath } from './src/constants';

/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomApplication}
 */
const config = {
  name: 'Product Import',
  entryPointUriPath,
  cloudIdentifier: 'gcp-au',
  headers: {
    csp: {
      'connect-src': ['self', 'http://localhost:61600'],
      'frame-src': ['self', 'https://app.csvbox.io/'],
    },
  },
  env: {
    development: {
      initialProjectKey: 'sawako-pim',
    },
    production: {
      applicationId: '${env:APPLICATION_ID}',
      url: '${env:APP_URL}',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  icon: '${path:@commercetools-frontend/assets/application-icons/rocket.svg}',
  mainMenuLink: {
    defaultLabel: 'Template starter',
    labelAllLocales: [],
    permissions: [PERMISSIONS.View],
  },
  submenuLinks: [
    {
      uriPath: 'channels',
      defaultLabel: 'Channels',
      labelAllLocales: [],
      permissions: [PERMISSIONS.View],
    },
  ],
};

export default config;
