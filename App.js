import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import AuthNavigation from "./navigation/AuthNavigation";
import { Appearance, AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "styled-components/native";
import { dark, light } from "./styles";
import { ApolloProvider, useReactiveVar } from "@apollo/client";
import client, { isLoggedInVar, tokenVar, cache } from "./Apollo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoggedInNavigation from "./navigation/LoggedInNavigation";
import { AsyncStorageWrapper, persistCache } from "apollo3-cache-persist";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(
    Appearance.getColorScheme() === "dark"
  );
  const onFinish = () => setLoading(false);
  const isloggedIn = useReactiveVar(isLoggedInVar);
  const preloading = async () => {
    // check if user is logged in
    const token = await AsyncStorage.getItem("token");
    if (token) {
      isLoggedInVar(true);
      tokenVar(token);
    }
    // store cache
    await persistCache({
      cache,
      storage: new AsyncStorageWrapper(AsyncStorage),
    });

    // preload assets
    const fonts = [Ionicons.font];
    const fontPromises = fonts.map((font) => Font.loadAsync(font));

    const images = [
      require("./assets/logo.png"),
      require("./assets/logo_white.png"),
      require("./assets/avatar.jpg"),
    ];
    const imagePromises = images.map((image) => Asset.loadAsync(image));
    return Promise.all([...fontPromises, ...imagePromises]);
  };

  Appearance.addChangeListener(({ colorScheme }) => {
    if (colorScheme === "dark") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  });

  return loading ? (
    <AppLoading
      startAsync={preloading}
      onError={console.warn}
      onFinish={onFinish}
    />
  ) : (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <ThemeProvider theme={darkMode ? dark : light}>
          <NavigationContainer>
            {isloggedIn ? <LoggedInNavigation /> : <AuthNavigation />}
          </NavigationContainer>
        </ThemeProvider>
      </AppearanceProvider>
    </ApolloProvider>
  );
}
