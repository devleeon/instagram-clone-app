import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import "react-native-gesture-handler";
import AuthNavigation from "./navigation/AuthNavigation";
import { Appearance, AppearanceProvider } from "react-native-appearance";
import { ThemeProvider } from "styled-components/native";
import { dark, light } from "./styles";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [client, setClient] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [darkMode, setDarkMode] = useState(
    Appearance.getColorScheme() === "dark"
  );
  const onFinish = () => setLoading(false);
  const preloading = async () => {
    const fonts = [Ionicons.font];
    const fontPromises = fonts.map((font) => Font.loadAsync(font));

    const images = [
      require("./assets/logo.png"),
      require("./assets/logo_white.png"),
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
      onError={console.warn}
      startAsync={preloading}
      onFinish={onFinish}
    />
  ) : (
    <AppearanceProvider>
      <ThemeProvider theme={darkMode ? dark : light}>
        <NavigationContainer>
          <AuthNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </AppearanceProvider>
  );
}
