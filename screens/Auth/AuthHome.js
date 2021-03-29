import React from "react";
import styled from "styled-components/native";
import { Container, Logo } from "./SharedStyles";

const SignUp = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 5px;
  justify-content: center;
  margin-bottom: 10px;
  background-color: ${(props) => {
    return props.theme.blue;
  }};
`;

const SignUpText = styled.Text`
  color: ${(props) => props.theme.text};
  text-align: center;
`;

const LogIn = styled.TouchableOpacity`
  width: 90%;
  height: 45px;
  border-radius: 5px;
  justify-content: center;
`;

const LogInText = styled.Text`
  color: ${(props) => props.theme.blue};
  text-align: center;
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
      <SignUp onPress={sendToSignUp}>
        <SignUpText>Create a New Account</SignUpText>
      </SignUp>
      <LogIn onPress={sendToLogIn}>
        <LogInText>Log In</LogInText>
      </LogIn>
    </Container>
  );
};
