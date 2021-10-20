import React, { useState } from "react";
import { View, StatusBar, ScrollView } from "react-native";

// keyboard avoiding view
import KeyboardWrapperAvoid from "../components/KeyboardWrapperAvoid";

import {
  DashboardContainer,
  ButtonText,
  StyledButton,
  ConfirmContainer,
  ConfirmationText,
  InnerConfirmContainer,
} from "../components/style";
import { Icon } from "react-native-elements/dist/icons/Icon";
import request from "../utils/request";
const JobConfirmation = ({ navigation, route }) => {
  return (
    <KeyboardWrapperAvoid>
      <DashboardContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00BCD4"
          translucent={true}
        />

        <ConfirmContainer>
          <ConfirmationText>
            {" "}
            Please press to confirm your job application{" "}
          </ConfirmationText>

          <InnerConfirmContainer>
            <StyledButton
              onPress={() => {
                navigation.navigate("MyJobs");
                /* Request work API */
                request
                  .post({
                    url: "userJob/req",
                    data: route.params,
                  })
                  .then(() => {
                    alert("request jobs success!");
                  });
              }}
            >
              <ButtonText>Confirm</ButtonText>
            </StyledButton>
          </InnerConfirmContainer>
        </ConfirmContainer>
      </DashboardContainer>
    </KeyboardWrapperAvoid>
  );
};

export default JobConfirmation;
