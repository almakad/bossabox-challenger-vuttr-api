export const toolsSchema = {
  type: 'array',
      items: {
        $ref: '#/schemas/toolSchema'
      }
}