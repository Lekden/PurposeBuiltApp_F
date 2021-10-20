import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

//icons
import { FontAwesome5 } from "@expo/vector-icons";
//colors
import { Colors } from "./style";
const { tomato } = Colors;

const HelpIcon = ({ label, icon, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{label}</Text>

      <FontAwesome5 name={icon} size={45} color={tomato} />
    </View>
  );
};

export default HelpIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  textStyle: {
    marginTop: 5,
    fontSize: 20,
    color: "black",
  },
});
