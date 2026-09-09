export const environment = {
  production: false,
  azure: {
    clientId: 'AQUI_VA_EL_CLIENT_ID_DE_TU_ANGULAR',
    tenantId: 'AQUI_VA_EL_TENANT_ID_DE_TU_COMPAÑERO',
    authority: 'https://login.microsoftonline.com/AQUI_VA_EL_TENANT_ID_DE_TU_COMPAÑERO',
    redirectUri: 'http://localhost:4200/',
    api: {
      clientId: 'AQUI_VA_EL_CLIENT_ID_DEL_BFF',
      scope: 'api://AQUI_VA_EL_CLIENT_ID_DEL_BFF/access_as_user',
      url: 'https://TU_API_GATEWAY.execute-api.us-east-1.amazonaws.com/Desarrollo'
    }
  }
};