import { FontAwesome } from "@expo/vector-icons";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useEffect, useState } from "react";
import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ApolloClientOptions from "./Apollo";
import { persistCache, AsyncStorageWrapper } from "apollo3-cache-persist";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import Nav from "./components/Nav";
import { AuthProvider } from "./AuthContext";
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const preloading = async () => {
    try {
      await Font.loadAsync({
        ...FontAwesome.font,
      });
      await Asset.loadAsync([require("./assets/logo.png")]);
      const cache = new InMemoryCache();
      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
      });
      const client = new ApolloClient({
        cache,
        ...ApolloClientOptions,
      });
      const isLoggedIn = AsyncStorage.getItem("isLoggedIn");
      if (isLoggedIn === null || isLoggedIn === false) {
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
      }
      setClient(client);
      setLoaded(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    preloading();
  }, []);
  return loaded && client && isLoggedIn !== null ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <AuthProvider isLoggedIn={isLoggedIn}>
          <Nav />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
}
