import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";

function Nav() {
  const isLoggedIn = useIsLoggedIn();
  const userLogOut = useLogOut();
  const userLogIn = useLogIn();
  console.log(isLoggedIn);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoggedIn ? (
        <>
          <Text>You are logged in now</Text>
          <TouchableOpacity onPress={userLogOut}>
            <Text>Click here to log out</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text>You are logged out now</Text>

          <TouchableOpacity onPress={userLogIn}>
            <Text>Click here to log in</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

export default Nav;
