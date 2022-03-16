import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: '5icylvva',
    dataset: 'production',
    apiVersion: 'v1',
    token: 'skdVRGDdfiWHJW8kxSp7vcRqWdWw7O4BKcsdN3MVtsuP91A0yNbW6INEOKgljN7BjNsQFknDPrD5ty3FO7u2KbO28YPeKLpUQJS0TIZ7awxjb7Rx9xbcRt5HFAsLFhm47uV9RD9seinUDGBIWPhd6HVRUKnhzEcKFLsQuVSoBJeVkLwhbOuO',
    useCdn: false
})