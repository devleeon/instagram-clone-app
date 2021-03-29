import React from "react";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  margin-top: 5px;
`;
const Text = styled.Text`
  color: ${(props) => props.theme.text};
  opacity: ${(props) => (props.blur ? 0.5 : 1)};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

const TextButton = ({ children, onPress, blur, bold }) => {
  return (
    <Button activeOpacity={0.8} onPress={onPress}>
      <Text blur={blur} bold={bold}>
        {children}
      </Text>
    </Button>
  );
};

export default TextButton;
