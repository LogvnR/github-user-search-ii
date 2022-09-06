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
