module.exports = {
  locales: ['en', 'ja'],
  sort: true,
  createOldCatalogs: false,
  output: 'locale/$LOCALE.json',
  lexers: {
    tsx: ['JsxLexer'],
  },
  input: "src/**/*.tsx",
}
