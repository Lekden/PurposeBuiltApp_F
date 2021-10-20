import React, { useState } from "react";
import { View, StatusBar, ScrollView } from "react-native";

// keyboard avoiding view
import KeyboardWrapperAvoid from "../components/KeyboardWrapperAvoid";

import { DashboardContainer, PageTitle, Container2 } from "../components/style";

const ITHelpFeedback = () => {
  return (
    <KeyboardWrapperAvoid>
      <DashboardContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00BCD4"
          translucent={true}
        />

        <PageTitle>IT Help/Feedback</PageTitle>

        <ScrollView>
          <Container2></Container2>
        </ScrollView>
      </DashboardContainer>
    </KeyboardWrapperAvoid>
  );
};

export default ITHelpFeedback;
