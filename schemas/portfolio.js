export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Main Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'title',
            title: 'Company Name',
            type: 'string',
            validation: Rule => Rule.required()
        }, 
        {
            name: 'href',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            }),
            title: 'Link',
            description: 'paste url here', 
        },
        {
            name: 'github',
            type: 'url',
            validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
            }),
            title: 'Link',
            description: 'paste github url here', 
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        }
    ]
}