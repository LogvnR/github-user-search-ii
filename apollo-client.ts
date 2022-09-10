import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://docs.github.com/en/graphql

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: 'Bearer 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',
  },
});

export { client };
