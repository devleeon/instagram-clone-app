import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const NativeView = styled(View)`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const NativeText = styled(Text)``;

export default () => (
  <NativeView>
    <NativeText>Confirm</NativeText>
  </NativeView>
);
