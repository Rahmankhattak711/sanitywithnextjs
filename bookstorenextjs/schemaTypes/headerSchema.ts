import { defineField, defineType } from "sanity";

export const headerSchema = defineType({
  name : "header",
  title : "Header",
  type : 'document',
  fields:[
    defineField({
      name : 'logo',
      title : 'Logo',
      type : 'image'
    }),
     defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'href', title: 'URL', type: 'url' },
          ],
        },
      ],
    }),
  ]
})
