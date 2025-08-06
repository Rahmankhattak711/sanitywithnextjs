import {defineField, defineType} from 'sanity'

export const dynamicSchema = defineType({
  name: 'dynamicGenPage',
  title: 'Dynamic Gen Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: [
        defineField({
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [
            {type: 'block'},
            {type: 'image'},
            {type: 'pagination'},
            {type: 'product'},
            {type: 'hero'},
            {type: 'contact'},
          ],
        }),
      ],
    }),
  ],
})
