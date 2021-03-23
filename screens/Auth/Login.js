import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const NativeView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const NativeText = styled.Text``;

export default ({ navigation }) => {
  return (
    <NativeView>
      <NativeText>Log In</NativeText>

      <TouchableOpacity>
        <NativeText>Click here to Log In</NativeText>
      </TouchableOpacity>

      <NativeText>
        If you don't have an account?
        <TouchableOpacity
          onPress={() => {
            return navigation.navigate("Signup");
          }}
        >
          <NativeText>Sign Up</NativeText>
        </TouchableOpacity>
      </NativeText>
    </NativeView>
  );
};
