import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) => {
    return props.theme.background;
  }};
`;

const NativeText = styled.Text`
  color: ${(props) => props.theme.text};
  margin-bottom: 10px;
`;
const Logo = styled.Image`
  max-width: 50%;
  height: 260px;
`;
const SignUp = styled.TouchableOpacity`
  padding: 5px 10px;
  border-radius: 5px;
  justify-content: center;
  background-color: ${(props) => {
    return props.theme.blue;
  }};
`;

const SignUpText = styled.Text`
  color: ${(props) => props.theme.text};
`;
export default ({ navigation }) => {
  const sendToLogIn = () => navigation.navigate("Login");
  const sendToSignUp = () => navigation.navigate("Signup");
  return (
    <Container>
      <Logo
        source={require("../../assets/logo_white.png")}
        resizeMode="contain"
      />
      <TouchableOpacity onPress={sendToLogIn}>
        <NativeText>Go to Login</NativeText>
      </TouchableOpacity>
      <SignUp onPress={sendToSignUp}>
        <SignUpText>Go to Signup</SignUpText>
      </SignUp>
    </Container>
  );
};
