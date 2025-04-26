// lib/sanity.js
import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'yourProjectId',
  dataset: 'yourDataset',
  apiVersion: '2023-10-01',
  useCdn: true,
})
