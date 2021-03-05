export const signUpPath = {
  post: {
    tags: ['SignUp'],
    sumary: 'API to create a new user',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/signupParams'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Created',
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