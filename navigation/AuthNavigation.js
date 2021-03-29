import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import Login from "../screens/Auth/Login";
import AuthHome from "../screens/Auth/AuthHome";

const Stack = createStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen
        name="AuthHome"
        component={AuthHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerBackTitleVisible: false,
          headerTitle: false,
          headerTransparent: true,
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Confirm"
        component={Confirm}
        options={{ title: "Confirm" }}
      />
    </Stack.Navigator>
  );
};
export default AuthNavigation;
