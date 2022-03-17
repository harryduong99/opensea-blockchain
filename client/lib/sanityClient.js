import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '6vmmyl8c',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skENo6PvLRghL8vKlsb8RY8lyRbkg3C1b1o593cKCy0qODilnyZYjV52siJ5lILVRZMgjC1RICOsU9K5kUrx3XDdueU2lXLMddKXFmuu1CK56OYZGWl7eqw4ToIdAKYytminFn4a5ET5HtmwAWzAlVVeo9ib6cXel6uEkDPNLi2b1W1Q2n1N',
    useCdn: false
})