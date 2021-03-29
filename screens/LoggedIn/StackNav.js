import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";
import Feed from "./Feed";
import Search from "./Search";
import Camera from "./Camera";
import MyProfile from "./MyProfile";
import Notification from "./Notification";
import { Image } from "react-native";
import styled from "styled-components/native";
import Comments from "./Comments";
import Likes from "./Likes";

const Logo = styled.Image`
  max-height: 100%;
  max-width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Stack = createStackNavigator();
const StackNav = ({ screenName }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "white",
        headerBackTitleVisible: false,
        headerStyle: { shadowColor: "black", backgroundColor: "black" },
      }}
    >
      {screenName === "Feed" && (
        <Stack.Screen
          name="Feed"
          component={Feed}
          options={{
            headerTitle: () => (
              <Logo
                resizeMode="contain"
                source={require("../../assets/logo_white.png")}
              />
            ),
          }}
        ></Stack.Screen>
      )}
      {screenName === "Search" && (
        <Stack.Screen name="Search" component={Search}></Stack.Screen>
      )}
      {screenName === "Camera" && (
        <Stack.Screen name="Camera" component={Camera}></Stack.Screen>
      )}
      {screenName === "MyProfile" && (
        <Stack.Screen name="MyProfile" component={MyProfile}></Stack.Screen>
      )}
      {screenName === "Notification" && (
        <Stack.Screen
          name="Notification"
          component={Notification}
        ></Stack.Screen>
      )}
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: (e) => console.log(e),
        }}
      ></Stack.Screen>
      <Stack.Screen name="Comments" component={Comments}></Stack.Screen>
      <Stack.Screen name="Likes" component={Likes}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default StackNav;
