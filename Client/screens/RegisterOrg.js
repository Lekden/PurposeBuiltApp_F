import React, { useState } from "react";
import { View, TouchableOpacity, Switch, StatusBar } from "react-native";
//formik for form
import { Formik } from "formik";
import request from "../utils/request";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";
//colors
const { brand, darkLight, primary, dodgerBlue } = Colors;

//radio button
import RadioButton from "expo-radio-button";

import KeyboardWrapperAvoid from "../components/KeyboardWrapperAvoid";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  SubTitle,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  TextLink,
  RadioContainer,
  TandCContainer,
  RadioText,
  TCText,
} from "./../components/style";

const RegisterOrg = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  //radio button for terms and conditions
  const [current, setCurrent] = useState(false);

  return (
    <KeyboardWrapperAvoid>
      <StyledContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00BCD4"
          translucent={true}
        />
        <InnerContainer>
          <PageTitle>Registration</PageTitle>
          <SubTitle> (For Organisation)</SubTitle>

          <Formik
            initialValues={{
              organisationName: "",
              email: "",
              organisationAddress: "",
              contactNumber: "",
              password: "",
              confirmPassword: "",
              RadioButton: "",
            }}
            onSubmit={(values) => {
              values = { ...values, RadioButton: current };
              const {
                organisationName,
                email,
                organisationAddress,
                contactNumber,
                password,
                confirmPassword,
                RadioButton,
              } = values;

              if (
                !organisationName.trim() ||
                !email.trim() ||
                !organisationAddress.trim() ||
                !contactNumber.trim() ||
                !password.trim()
              ) {
                alert("Please fill in all the fields!");
                return;
              }

              if (RadioButton === false) {
                alert("Please check Terms and Conditions");
                return;
              }

              if (password === confirmPassword && password.length > 6) {
                const body = {
                  phone: contactNumber,
                  email,
                  password,
                  name: organisationName,
                  companyAddress: organisationAddress,
                };

                /* Request org user registration */
                request
                  .post({
                    url: "organisation/register",
                    data: body,
                  })
                  .then(({ code }) => {
                    if (code == 200) {
                      /* Jump to login */
                      alert("Registration successful!");
                      navigation.navigate("Login");
                    }
                  });
              } else {
                alert(
                  "Password does not match and should be more than 6 characters!"
                );
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Organisation Name"
                  icon="person"
                  placeholder="Name"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("organisationName")}
                  onBlur={handleBlur("organisationName")}
                  value={values.organisationName}
                />

                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="abc@example.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                  keyboardType="email-address"
                />

                <MyTextInput
                  label="Oraganisation Address"
                  icon="note"
                  placeholder="address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("organisationAddress")}
                  onBlur={handleBlur("organisationAddress")}
                  value={values.organisationAddress}
                />
                <MyTextInput
                  label="Contact Number"
                  icon="device-mobile"
                  placeholder="0123456789"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("contactNumber")}
                  onBlur={handleBlur("conatctNumber")}
                  value={values.contactNumber}
                  keyboardType="numeric"
                />
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MyTextInput
                  label="Confirm Password"
                  icon="lock"
                  placeholder="* * * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />

                <RadioContainer>
                  <RadioButton
                    value="Agree"
                    selected={current}
                    onSelected={(value) => setCurrent(value)}
                    radioBackground="green"
                  >
                    <RadioText> Agree to </RadioText>
                  </RadioButton>
                </RadioContainer>

                <TandCContainer>
                  <TextLink
                    onPress={() => navigation.navigate("TermsandConditions")}
                  >
                    <TCText> Terms and Conditions </TCText>
                  </TextLink>
                </TandCContainer>

                <MsgBox>... </MsgBox>

                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Register</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardWrapperAvoid>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={dodgerBlue} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <TouchableOpacity>
        <StyledTextInput {...props} />
      </TouchableOpacity>

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default RegisterOrg;
