import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { useIsLoggedIn, useLogIn, useLogOut } from "../AuthContext";
import AuthNavigation from "../navigation/AuthNavigation";
const NativeView = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
function Nav() {
  const isLoggedIn = useIsLoggedIn();
  const userLogOut = useLogOut();
  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? (
        <NativeView>
          <Text>You are logged in now</Text>
          <TouchableOpacity onPress={userLogOut}>
            <Text>Click here to log out</Text>
          </TouchableOpacity>
        </NativeView>
      ) : (
        <>
          <AuthNavigation />
        </>
      )}
    </View>
  );
}

export default Nav;
