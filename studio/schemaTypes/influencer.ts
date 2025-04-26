export default {
  name: 'influencer',
  title: 'Influencer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) =>
        Rule.required()
          .min(1)
          .max(100)
          .error('Name is required and should be between 1 and 100 characters'),
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      validation: (Rule: { required: () => { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) =>
        Rule.required()
          .max(200)
          .error('Tagline is required and should be less than 200 characters'),
    },
    {
      name: 'handle',
      title: 'Social Handle',
      type: 'string',
      validation: (Rule: { required: () => { (): any; new(): any; regex: { (arg0: RegExp, arg1: { name: string; }): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) =>
        Rule.required()
          .regex(/^@[a-zA-Z0-9_]+$/, {name: 'handle'})
          .error(
            'Handle must start with "@" and contain only alphanumeric characters or underscores',
          ),
    },
    {
      name: 'followers',
      title: 'Followers',
      type: 'string',
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; new(): any; }; }; }) =>
        Rule.required().min(3).max(20).error('Followers should be between 3 and 20 characters'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: ['Fashion', 'Tech', 'Travel', 'Fitness', 'All'],
        layout: 'radio',
      },
      validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Category is required'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'social',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
          validation: (Rule: { uri: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.uri().error('Please provide a valid Instagram URL'),
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
          validation: (Rule: { uri: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.uri().error('Please provide a valid Twitter URL'),
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
          validation: (Rule: { uri: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.uri().error('Please provide a valid Facebook URL'),
        },
        {
          name: 'youtube',
          title: 'YouTube',
          type: 'url',
          validation: (Rule: { uri: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.uri().error('Please provide a valid YouTube URL'),
        },
      ],
    },
  ],
}
