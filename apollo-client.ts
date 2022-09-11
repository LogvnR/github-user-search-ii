import { ApolloClient, InMemoryCache } from '@apollo/client';

// https://docs.github.com/en/graphql

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});

export { client };
