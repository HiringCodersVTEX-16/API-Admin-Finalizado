import { Service } from '@vtex/api'

export default new Service({
  graphql: {
    resolvers: {
      Query: {
        helloworld: () => `Teste`,
      },
    },
  },
})
