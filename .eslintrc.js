module.exports = {
  parser: 'babel-eslint',
  root: true,
  env: {
    node: true
  },
  'extends': [
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
