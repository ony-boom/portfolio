import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',

  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    }),
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      type: 'internationalizedArrayDescription',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'asset',
      title: 'Assets',
      type: 'file',
      options: {
        accept: 'image/*,video/*',
      },
    }),

    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

  ],
})
