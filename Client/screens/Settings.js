import React, { useState } from "react";
import { View, StatusBar, ScrollView } from "react-native";

import HelpIcon from "../components/HelpIcon";

import {
  DashboardContainer,
  ButtonText,
  NavContainer,
  NavText,
  SettingsButton,
  TextLink,
  HelpContainer,
} from "../components/style";
import UserState from "../utils/user";
const Settings = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <DashboardContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />

      <HelpContainer>
        <TextLink onPress={() => navigation.navigate("SocialWorker")}>
          <HelpIcon label="HELP" icon="hands-helping" />
        </TextLink>
      </HelpContainer>
      <NavContainer>
        <NavText> Settings </NavText>
      </NavContainer>

      <ScrollView>
        <SettingsButton>
          <ButtonText onPress={() => navigation.navigate("SwitchLocations")}>
            Switch Location
          </ButtonText>
        </SettingsButton>

        <SettingsButton>
          <ButtonText onPress={() => navigation.navigate("ITHelpFeedback")}>
            IT Help/Feedback
          </ButtonText>
        </SettingsButton>

        <SettingsButton>
          <ButtonText
            onPress={() => {
              /* The user logs out and clears the login information */
              navigation.navigate("Login");
              UserState.email = undefined;
              UserState.name = undefined;
            }}
          >
            Logout
          </ButtonText>
        </SettingsButton>
      </ScrollView>
    </DashboardContainer>
  );
};

export default Settings;
