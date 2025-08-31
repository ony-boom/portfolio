import {defineConfig, defineField} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
// import {documentInternationalization} from '@sanity/document-internationalization'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

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
  dataset: 'production',

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
    /*
    documentInternationalization({
      supportedLanguages: languages,
      schemaTypes: [],
    }),
*/
  ],

  schema: {
    types: schemaTypes,
  },
})
