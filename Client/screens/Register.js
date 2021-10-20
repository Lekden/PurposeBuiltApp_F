import React, { useState } from "react";
import { View, CheckBox, StatusBar } from "react-native";
//formik for form
import { Formik } from "formik";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";
//colors
const { brand, darkLight, primary, dodgerBlue } = Colors;

//alert
import { Alert } from "react-native";
import request from "../utils/request";

//radio button
import RadioButton from "expo-radio-button";

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
  FormContainer,
  RadioContainer,
  TandCContainer,
  RadioText,
  TCText,
} from "./../components/style";
import KeyboardWrapperAvoid from "../components/KeyboardWrapperAvoid";

const Register = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  //checkbox for social workers
  const [checked, setChecked] = useState(false);

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
          <PageTitle> Registration </PageTitle>

          <FormContainer>
            <Formik
              initialValues={{
                fullName: "",
                email: "",
                mobileNumber: "",
                password: "",
                confirmPassword: "",
                CheckBox: "",
                RadioButton: "",
              }}
              onSubmit={(values) => {
                values = { ...values, CheckBox: checked, RadioButton: current };
                const {
                  fullName,
                  email,
                  mobileNumber,
                  password,
                  confirmPassword,
                  RadioButton,
                } = values;

                if (
                  !fullName.trim() ||
                  !email.trim() ||
                  !mobileNumber.trim() ||
                  !password.trim()
                ) {
                  alert("Please fill in all the fields!");
                } else if (password != confirmPassword) {
                  alert(
                    "Passwords do not match and should be more than 6 characters!"
                  );
                  return;
                }

                if (RadioButton === false) {
                  alert("Please check Terms and Conditions");
                  return;
                }

                if (password === confirmPassword && password.length > 6) {
                  const body = {
                    name: fullName,
                    email: email,
                    password: password,
                    phone: mobileNumber,
                    socialWorker: checked,
                  };

                  /* Request user registration */
                  request
                    .post({
                      url: "user/register",
                      data: body,
                    })
                    .then((res) => {
                      if (res.status !== 200) {
                        alert("User already Exists!");
                      } else {
                        alert("Registration successful!");
                        navigation.navigate("Login");
                      }
                    });

                  //
                }
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <MyTextInput
                    label="Full Name"
                    icon="person"
                    placeholder="First name Last name"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("fullName")}
                    onBlur={handleBlur("fullName")}
                    value={values.fullName}
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
                    label="Mobile Number"
                    icon="device-mobile"
                    placeholder="0123456789"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("mobileNumber")}
                    onBlur={handleBlur("mobileNumber")}
                    value={values.mobileNumber}
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
                  <ExtraView onSubmit={handleSubmit}>
                    <ExtraText>Are you a Social Worker? </ExtraText>

                    <CheckBox value={checked} onValueChange={setChecked} />
                  </ExtraView>
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

                  <ExtraView>
                    <ExtraText>Already Registered? </ExtraText>
                    <TextLink onPress={() => navigation.navigate("Login")}>
                      <TextLinkContent> Login</TextLinkContent>
                    </TextLink>
                  </ExtraView>

                  <ExtraView>
                    <ExtraText>Organisation? </ExtraText>
                    <TextLink
                      onPress={() => navigation.navigate("RegisterOrg")}
                    >
                      <TextLinkContent> Register here </TextLinkContent>
                    </TextLink>
                  </ExtraView>
                </StyledFormArea>
              )}
            </Formik>
          </FormContainer>
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
      <StyledTextInput {...props} />

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

//YellowBox.ignoreWarnings(['Warning: ...']);

//console.disableYellowBox = true;

export default Register;
