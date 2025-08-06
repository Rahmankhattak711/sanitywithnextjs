import {defineField, defineType} from 'sanity'

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'object',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'string'}),
    defineField({name: 'message', title: 'Message', type: 'string'}),
    defineField({name: 'button', title: 'Button', type: 'string'}),
  ],
})
