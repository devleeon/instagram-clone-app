import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import KeyboardDissmiss from "../KeyboardDissmiss";
import {
  Container,
  InputView,
  Logo,
  SubmitButton,
  SubmitText,
  TextInput,
} from "./SharedStyles";
import { gql, useMutation } from "@apollo/client";
import { focusNextInput } from "../../utils";

const CREATE_ACCOUNT = gql`
  mutation createUser(
    $email: String!
    $username: String!
    $password: String!
    $firstname: String
  ) {
    createUser(
      username: $username
      emailOrPhone: $email
      password: $password
      firstname: $firstname
    ) {
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

const NativeText = styled.Text`
  color: ${(props) => props.theme.text};
`;

export default ({ navigation }) => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const firstNameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    onCompleted: (data) => {
      console.log(data);
    },
  });
  const onValid = (data) => {
    createAccount({
      variables: { ...data },
    });
  };
  useEffect(() => {
    register("email");
    register("firstname");
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
            placeholder="email"
            returnKeyType="next"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            autoCapitalize="none"
            onChangeText={(value) => {
              setValue("email", value);
            }}
            onSubmitEditing={() => focusNextInput(firstNameRef)}
          ></TextInput>
          <TextInput
            ref={firstNameRef}
            placeholder="first name"
            returnKeyType="next"
            autoCapitalize="none"
            onChangeText={(value) => {
              setValue("firstname", value);
            }}
            onSubmitEditing={() => focusNextInput(usernameRef)}
          ></TextInput>
          <TextInput
            ref={usernameRef}
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
            <SubmitText>Create a New Account</SubmitText>
          </SubmitButton>
        </InputView>

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
      </Container>
    </KeyboardDissmiss>
  );
};
