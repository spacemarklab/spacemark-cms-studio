import { defineType } from 'sanity'

export const schemaTypes = [
  defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
      { name: 'body', title: 'Body', type: 'text' },
    ],
  }),
];

