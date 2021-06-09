const sanityClient = require('@sanity/client')

const token = "skTZHn02a2FLnXKsWUvl2cVMepSNkpFN5LEX1iL58iHmAneQAtL4K0XtkWTdtQ6ALmqqFm72xXewY0Ct9NyEJJN94ayLSnc3Q5JvPiYnivt2Rg1m2zInJ9DTBQL9N0PZfWAFKYR8I13uuyQWgOFRFWVtdaIEYgUquyQrmpS8OB8RsGUMwGlr"

const client = sanityClient({
  projectId: 'xo7u6ywv',
  dataset: 'production',
  apiVersion: '2021-06-09', // use current UTC date - see "specifying API version"!
  token: token, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})

export default client;
