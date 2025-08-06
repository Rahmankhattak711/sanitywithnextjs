import {defineField, defineType} from 'sanity'

export const button = defineType({
  name: 'button',
  title: 'Button',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
  ],
})
