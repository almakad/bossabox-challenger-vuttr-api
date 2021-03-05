import { loginPath, signUpPath, toolsPath } from './paths'
import { accountSchema, errorSchema, loginParamsSchema, signUpParamsSchema, tagsSchemas, toolSchema, toolsSchema, bearerSchema} from './schemas'
import { badRequest, serverError, unauthorized, notFound, forbidden } from './components'

export default {
  openapi: '3.0.0',
  info: {
    title: 'VUTTR (Very Useful Tools to Remember)',
    description: 'To save tools in database',
    version: '1.0.0'
  },
  licence: {
    name: 'GPL3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0-or-later.html'
  },
  contact: {
    name: 'Carlos Rodrigues',
    email: 'carls-f@live.com',
    url: 'https://github.com/almakad/bossabox-challenger-vuttr-api'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  },
  {
    name: 'Tools'
  
  }
],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath,
    '/tools': toolsPath
  },
  schemas: {
    error: errorSchema,
    account: accountSchema,
    loginParams: loginParamsSchema,
    signupParams: signUpParamsSchema,
    toolsSchema: toolsSchema,
    toolSchema: toolSchema,
    tag: tagsSchemas

  },
  components: {
    securitySchemes: {
      bearerAuth: bearerSchema
    },
    badRequest,
    serverError,
    unauthorized,
    notFound,
    forbidden
  }
}