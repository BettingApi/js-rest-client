// eslint-disable-next-line @typescript-eslint/no-var-requires
require('@babel/register')({
  root: __dirname,
  extensions: ['.ts'],
  babelrcRoots: [
    '.',
    './core/',
    './football/',
    './tennis/',
  ],
  // rootMode: 'upward',
  cache: true,
})
