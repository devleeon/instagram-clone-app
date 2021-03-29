import React from "react";
import styled from "styled-components/native";
import { Container } from "./SharedStyles";
const Text = styled.Text`
  color: white;
`;
const Notification = () => {
  return (
    <Container>
      <Text>Notification</Text>
    </Container>
  );
};

export default Notification;
