import { loginPath, signUpPath } from './paths'
import { accountSchema, errorSchema, loginParamsSchema, signUpParamsSchema } from './schemas'
import { badRequest, serverError, unauthorized, notFound } from './components'

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
  }
],
  paths: {
    '/login': loginPath,
    '/signup': signUpPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    signupParams: signUpParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    unauthorized,
    notFound
  }
}