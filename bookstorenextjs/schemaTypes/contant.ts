    export const contant = {
      name: 'contant',
      type: 'document',
      title: 'Contant',
      fields: [
        {
          name: 'body',
          title: 'Body',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H1', value: 'h1' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'Quote', value: 'blockquote' },
                { title: 'Code', value: 'code' },
                { title: 'Preformatted', value: 'pre' },
              ],
              lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
                { title: 'Todo', value: 'todo' },
                { title: 'Checklist', value: 'checklist' },
              ],
              marks: {
                decorators: [
                  { title: 'Strong', value: 'strong' },
                  { title: 'Emphasis', value: 'em' },
                  { title: 'Code', value: 'code' },
                  { title: 'Underline', value: 'underline' },
                  { title: 'Strikethrough', value: 'strikethrough' },
                  { title: 'Highlight', value: 'highlight' },
                ],
                annotations: [
                  {
                    name: 'link',
                    type: 'object',
                    title: 'URL',
                    fields: [
                      {
                        name: 'href',
                        type: 'string',
                        title: 'URL',
                      },
                    ],
                  },
                ],
              },
            },
            {
              type: 'image',
              fields: [
                {
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                },
              ],
            },
          ],
        },
      ],
    };
