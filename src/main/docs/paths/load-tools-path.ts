export const toolsPath = {
  get: {
    security: [{
      bearerAuth: []
    }],
    tags: ['Tools'],
    summary: 'Endpoint to list all tools',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/toolsSchema'
            }
          }
        }
      },
      403: {
        $ref: '#/components/forbidden'
      },   
      404: {
        $ref: '#/components/notFound'
      },  
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}