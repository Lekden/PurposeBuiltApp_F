import React, { useState } from "react";
import { View, StatusBar, Text, ScrollView } from "react-native";

// keyboard avoiding view
import KeyboardWrapperAvoid from "./../components/KeyboardWrapperAvoid";

import {
  DashboardContainer,
  Container2,
  NavText,
  NavContainer,
} from "../components/style";

const TermsandConditions = ({ navigation }) => {
  return (
    <KeyboardWrapperAvoid>
      <DashboardContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00BCD4"
          translucent={true}
        />

        <NavContainer>
          <NavText> Terms and Conditions </NavText>
        </NavContainer>

        <ScrollView>
          <Container2>
            <Text>
              A Terms and Conditions agreement acts as legal contracts between
              you (the company) who has the website or mobile app, and the user
              who accesses your website/app. Having a Terms and Conditions
              agreement is completely optional. No laws require you to have one.
              Not even the super-strict and wide-reaching General Data
              Protection Regulation (GDPR). Your Terms and Conditions agreement
              will be uniquely yours. While some clauses are standard and
              commonly seen in pretty much every Terms and Conditions agreement,
              it's up to you to set the rules and guidelines that the user must
              agree to. You can think of your Terms and Conditions agreement as
              the legal agreement where you maintain your rights to exclude
              users from your app in the event that they abuse your app, where
              you maintain your legal rights against potential app abusers, and
              so on. Terms and Conditions agreements are also known as Terms of
              Service or Terms of Use agreements. These terms are
              interchangeable, practically speaking.
            </Text>
          </Container2>
        </ScrollView>
      </DashboardContainer>
    </KeyboardWrapperAvoid>
  );
};

export default TermsandConditions;
