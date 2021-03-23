import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const NativeView = styled.View`
  background-color: ${(props) => {
    return props.theme.background;
  }};
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const NativeText = styled.Text`
  color: ${(props) => props.theme.text};
`;

export default ({ navigation }) => (
  <NativeView>
    <NativeText>Sign Up</NativeText>
    <NativeText>
      If you don't have an account?
      <TouchableOpacity
        onPress={() => {
          return navigation.navigate("Login");
        }}
      >
        <NativeText>Log In</NativeText>
      </TouchableOpacity>
    </NativeText>
  </NativeView>
);
