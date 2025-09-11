import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',

  fields: [
    defineField({
      name: 'language',
      type: 'string',
      options: {
        list: [
          {title: 'English', value: 'en'},
          {title: 'French', value: 'fr'},
        ],
      },
    }),

    defineField({
      name: 'cover',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'caption',
          type: 'string',
          title: 'Caption',
        }),
      ],
    }),

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
      name: 'slug',
      title: 'Slug',
      type: 'string', // beccause of i18n slug issues
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),

    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'code',
          title: 'Code Block',
          options: {
            languageAlternatives: [
              {title: 'Plain text', value: 'txt'},
              {title: 'Javascript', value: 'javascript'},
              {title: 'Typescript', value: 'typescript'},
              {title: 'Nix', value: 'nix'},
              {title: 'Go', value: 'go'},
              {title: 'JSON', value: 'json'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'SH', value: 'sh'},
              {title: 'JSX', value: 'jsx'},
              {title: 'TSX', value: 'tsx'},
            ],
            withFilename: true,
            highlightedLines: true,
          },
        },
      ],
    }),
  ],
})
