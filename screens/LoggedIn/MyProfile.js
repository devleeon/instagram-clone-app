import React from "react";
import styled from "styled-components/native";
import { Container } from "./SharedStyles";

const Text = styled.Text`
  color: white;
`;

const MyProfile = () => {
  return (
    <Container>
      <Text>MyProfile</Text>
    </Container>
  );
};

export default MyProfile;
