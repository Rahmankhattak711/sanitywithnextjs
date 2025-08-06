import {defineField, defineType} from 'sanity'

export const pagination = defineType({
  name: 'pagination',
  title: 'Pagination',
  type: 'document',
  fields: [
    defineField({
      name: 'currentPage',
      title: 'Current Page',
      type: 'number',
    }),
    defineField({
      name: 'totalPages',
      title: 'Total Pages',
      type: 'number',
    }),
  ],
})
