import React from "react";
import { Keyboard, Platform, TouchableWithoutFeedback } from "react-native";

const KeyboardDissmiss = ({ children }) => {
  function keyboardDissmiss() {
    if (Platform.OS === "ios") Keyboard.dismiss();
  }
  return (
    <TouchableWithoutFeedback onPress={keyboardDissmiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default KeyboardDissmiss;
