// Consult https://www.snowpack.dev to learn about these options
module.exports = {
  extends: '@sveltejs/snowpack-config',
  mount: {
    'src/components': '/_components',
    'src/lib': '/_lib',
    'src/mocks': '/_mocks',
  },
  alias: {
    $components: './src/components',
    $lib: './src/lib',
    $mocks: './src/mocks',
  },
}
