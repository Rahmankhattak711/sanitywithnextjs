import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'string' }),
    defineField({ name: 'price', title: 'Price', type: 'number' }),
    defineField({ name: 'image', title: 'Image', type: 'image' }),
  ],
})

