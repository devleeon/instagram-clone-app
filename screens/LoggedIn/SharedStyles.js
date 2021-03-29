import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) => {
    return props.theme.background;
  }};
`;
