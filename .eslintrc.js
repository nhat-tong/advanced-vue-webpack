module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  // extend standard rules
  extends: 'standard',
  // semicolon is required
  rules: {
    semi: [2, 'always']
  },
  // required to *.vue files
  plugins: [
    'html'
  ]
 }
