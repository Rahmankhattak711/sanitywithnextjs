import {defineField, defineType} from 'sanity'

export const bookSchema = defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),

     defineField({
      name: 'contant',
      title: 'Block Content',
      type: 'document',
      fields: [
        {
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [
            {
              type: 'block',
            },
            {
              type: 'image',
            },
          ],
        },
      ]
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'author'}],
        },
      ],
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    }),
  ],
})
