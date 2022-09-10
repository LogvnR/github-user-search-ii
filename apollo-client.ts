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
