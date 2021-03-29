import { gql, useMutation } from "@apollo/client";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { loginUser } from "../../Apollo";
import { focusNextInput } from "../../utils";
import KeyboardDissmiss from "../KeyboardDissmiss";
import {
  Container,
  InputView,
  Logo,
  SubmitButton,
  SubmitText,
  TextInput,
} from "./SharedStyles";

export const LOG_IN = gql`
  mutation login($username: String!, $password: String!) {
    login(emailOrUsername: $username, password: $password) {
      token
      error {
        message
        location
      }
      user {
        username
      }
    }
  }
`;

const NativeView = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const NativeText = styled.Text``;

export default ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm();

  const passwordRef = useRef();

  const onCompleted = (data) => {
    const {
      login: { error, token },
    } = data;
    console.log(error);
    if (error === null) {
      loginUser(token);
    }
  };
  const onValid = (data) => {
    login({ variables: { ...data } });
  };

  const [login] = useMutation(LOG_IN, {
    onCompleted,
  });

  useEffect(() => {
    register("username");
    register("password");
  }, [register]);
  return (
    <KeyboardDissmiss>
      <Container>
        <InputView behavior="padding">
          <Logo
            source={require("../../assets/logo_white.png")}
            resizeMode="contain"
          />
          <TextInput
            autoFocus={true}
            placeholder="username"
            returnKeyType="next"
            autoCapitalize="none"
            require={true}
            onChangeText={(value) => {
              setValue("username", value);
            }}
            onSubmitEditing={() => focusNextInput(passwordRef)}
          ></TextInput>
          <TextInput
            ref={passwordRef}
            placeholder="password"
            returnKeyType="send"
            secureTextEntry={true}
            require={true}
            onChangeText={(value) => {
              setValue("password", value);
            }}
            onSubmitEditing={handleSubmit(onValid)}
          ></TextInput>
          <SubmitButton onPress={handleSubmit(onValid)}>
            <SubmitText>Log In</SubmitText>
          </SubmitButton>
        </InputView>
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
      </Container>
    </KeyboardDissmiss>
  );
};
