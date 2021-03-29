import {
  ApolloClient,
  InMemoryCache,
  makeVar,
  createHttpLink,
} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setContext } from "@apollo/client/link/context";

export const tokenVar = makeVar("");
export const isLoggedInVar = makeVar(false);
export const loginUser = async (token) => {
  await AsyncStorage.setItem("token", token);
  tokenVar(token);
  isLoggedInVar(true);
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem("token");
  tokenVar(null);
  isLoggedInVar(false);
};
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getFeed: {
          merge(existing, incoming, { args: { cursor } }) {
            if (!cursor) {
              return incoming;
            }
            const merged = existing !== undefined ? existing.feed.slice(0) : [];
            let offset = merged.length;
            for (let i = 0; i < incoming.feed.length; ++i) {
              merged[offset + i] = incoming.feed[i];
            }
            const result = {
              cursor: incoming.cursor,
              hasMore: incoming.hasMore,
              feed: merged,
            };
            return result;
          },

          read(existing) {
            if (existing) {
              return {
                cursor: existing.cursor,
                hasMore: existing.hasMore,
                feed: Object.values(existing.feed),
              };
            }
          },
        },
      },
    },
  },
});
const httpLink = createHttpLink({
  uri: "https://instagram-clone-back.herokuapp.com/graphql",
});

// we use setContext to attatch token to the header
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: tokenVar(),
    },
  };
});
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});
export default client;
