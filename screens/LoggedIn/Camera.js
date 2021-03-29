import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { logoutUser } from "../../Apollo";
import { Container } from "./SharedStyles";

const Text = styled.Text`
  color: white;
`;

const Camera = () => {
  return (
    <Container>
      <Text>camera</Text>
      <TouchableOpacity onPress={() => logoutUser()}>
        <Text>logout</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Camera;
