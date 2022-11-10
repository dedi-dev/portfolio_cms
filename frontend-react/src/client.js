import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'hucv200d',
    dataset: 'production',
    apiVersion: '2022-11-10',
    useCdn: true,
    token: 'skADJXqXK8eWNKqUkqjczjvo9vIaoJDOxEr5pwuoaaVg31CNlruBXWlaIjSGTujHhuCRZAJ0EzBFk0WKvDzfHJd1JsJlKhGdJFFRSnMk1Ftlrf00xJ5iR25tV3z6QKJr3DfS7ohcPuc1NtgM8pnpyKyHv1KX1ug41jnqYQQ7cmSkzrUTVocN',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)