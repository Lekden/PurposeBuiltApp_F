import React, { useState } from "react";
import { View, StatusBar, Alert } from "react-native";
//formik for form
import { Formik } from "formik";
// keyboard avoiding view
import {
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";
//colors
const { darkLight, primary, dodgerBlue } = Colors;

import request from "../utils/request";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  TitleLogo,
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
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from "./../components/style";
import UserState from "../utils/user";

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <DismissKeyboard>
      <StyledContainer>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00BCD4"
          translucent={true}
        />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("./../assets/img/albatross.jpg")}
          />
          <TitleLogo
            resizeMode="stretch"
            source={require("./../assets/img/fontlogo.png")}
          />
          <SubTitle> Account Login</SubTitle>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => {
              request
                .post({
                  url: "user/login",
                  data: values,
                })
                .then((res) => {
                  const { userInfo } = res;
                  if (res.code == 200) {
                    UserState.name = userInfo.name;
                    UserState.email = userInfo.email;
                    UserState.role = userInfo.role;
                    if (userInfo.role === 0) {
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "IndDashboard" }],
                      });
                      console.log(UserState.role);
                      // navigation.navigate("IndDashboard");
                    } else if (userInfo.role === 1) {
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "SWDashboard" }],
                      });
                      // navigation.navigate("SWDashboard");
                    } else {
                      navigation.reset({
                        index: 0,
                        routes: [{ name: "OrgDashboard" }],
                      });
                      // navigation.navigate("OrgDashboard");
                    }
                  } else {
                    Alert.alert(
                      "Username or password is wrong, please try again!"
                    );
                  }
                });
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
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
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>... </MsgBox>

                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>

                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={primary} size={16} />
                  <TextLink onPress={() => navigation.navigate("OrgDashboard")}>
                    <ButtonText> Sign in with Google</ButtonText>
                  </TextLink>
                </StyledButton>

                <ExtraView>
                  <ExtraText>Not Registered Already?</ExtraText>
                  <TextLink onPress={() => navigation.navigate("Register")}>
                    <TextLinkContent> Register</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </DismissKeyboard>
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

const DismissKeyboard = ({ children }) => {
  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: primary }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Login;
