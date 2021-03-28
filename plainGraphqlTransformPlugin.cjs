const fileRegex = /\.graphql$/

function minifyGql (gql) {
  return gql.replace(/\s+/g, ' ')
}

module.exports = function plainGraphqlTransformPlugin() {
  return {
    name: 'transform-file',

    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: `export default \`${minifyGql(src)}\``,
        }
      }
    }
  }
}
