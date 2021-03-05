export const loginPath = {
  post: {
    tags: ['Login'],
    sumary: 'API to authenticate user',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/loginParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/account'
            }
          }
        }
      }
    },
    400: {
      description: 'Bad Request',
  
    }
  }
}