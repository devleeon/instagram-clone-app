import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Camera from "../screens/LoggedIn/Camera";
import Feed from "../screens/LoggedIn/Feed";
import MyProfile from "../screens/LoggedIn/MyProfile";
import Notification from "../screens/LoggedIn/Notification";
import Search from "../screens/LoggedIn/Search";
import StackNav from "../screens/LoggedIn/StackNav";

const Tab = createBottomTabNavigator();

const LoggedInNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "white",
        style: {
          borderTopColor: "rgba(255,255,255, 0.2)",
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              color={color}
              size={focused ? 22 : 20}
            />
          ),
        }}
      >
        {() => <StackNav screenName="Feed" />}
      </Tab.Screen>
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              color={color}
              size={focused ? 22 : 20}
            />
          ),
        }}
      >
        {() => <StackNav screenName="Search" />}
      </Tab.Screen>
      <Tab.Screen
        name="Camera"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "camera" : "camera-outline"}
              color={color}
              size={focused ? 22 : 20}
            />
          ),
        }}
      >
        {() => <StackNav screenName="Camera" />}
      </Tab.Screen>
      <Tab.Screen
        name="Notification"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              color={color}
              size={focused ? 22 : 20}
            />
          ),
        }}
      >
        {() => <StackNav screenName="Notification" />}
      </Tab.Screen>
      <Tab.Screen
        name="MyProfile"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={focused ? 22 : 20}
            />
          ),
        }}
      >
        {() => <StackNav screenName="MyProfile" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default LoggedInNavigation;
