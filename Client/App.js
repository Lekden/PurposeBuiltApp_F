import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";

import Tabs from "./components/Tabs";

const App = () => {
  LogBox.ignoreLogs(["Remote debugger"]);
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};
export default App;
