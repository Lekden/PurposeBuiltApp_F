import React from "react";

// keyboard avoiding view
import {
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

//colors
import { Colors } from "./style";
const { primary } = Colors;

const KeyboardWrapperAvoid = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: primary }}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default KeyboardWrapperAvoid;
