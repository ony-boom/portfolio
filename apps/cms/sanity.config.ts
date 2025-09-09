import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {documentInternationalization} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {codeInput} from '@sanity/code-input'

const languages = [
  {
    id: 'en',
    title: 'English',
  },
  {
    id: 'fr',
    title: 'French',
  },
]

export default defineConfig({
  name: 'default',
  title: 'ony.world',

  projectId: 'shryonlo',
  dataset: process.env.NODE_ENV === 'production' ? 'production' : 'development',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages,
      defaultLanguages: ['en'],
      fieldTypes: [
        'string',
        defineField({
          name: 'description',
          type: 'array',
          of: [{type: 'block'}],
        }),
      ],
    }),

    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: ['blog'],
    }),
    codeInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
