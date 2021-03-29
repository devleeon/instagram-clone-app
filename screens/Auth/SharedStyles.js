import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${(props) => {
    return props.theme.background;
  }};
`;

export const Logo = styled.Image`
  max-width: 50%;
  height: 130px;
`;

export const InputView = styled.KeyboardAvoidingView`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;

export const TextInput = styled.TextInput`
  width: 95%;
  height: 45px;
  background-color: ${(props) => props.theme.input};
  text-align: left;
  padding-left: 30px;
  margin-bottom: 4px;
  border-radius: 5px;
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 95%;
  height: 45px;
  border-radius: 5px;
  justify-content: center;
  margin-bottom: 10px;
  background-color: ${(props) => {
    return props.theme.blue;
  }};
`;
export const SubmitText = styled.Text`
  color: ${(props) => props.theme.text};
  text-align: center;
`;
