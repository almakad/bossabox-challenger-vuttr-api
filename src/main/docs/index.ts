import { loginPath } from '../docs/paths/login-path'
import { accountSchema } from '../docs/schemas/account-schema'
import { loginParamsSchema } from '../docs/schemas/login-params-schema'

export default {
  openapi: '3.0.0',
  info: {
    title: 'VUTTR (Very Useful Tools to Remember)',
    description: 'To save tools in database',
    version: '1.0.0'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login',
  }],
  paths: {
    '/login': loginPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema
  }
}