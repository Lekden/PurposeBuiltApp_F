import styled from "styled-components";
import Constants from "expo-constants";

//import { Dimensions } from "react-native";
//const {width, height } = Dimensions.get("window");

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  darkLight: "#9CA3AF",
  brand: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
  ttest: "#87ceeb",
  tomato: `#ff6347`,
  dodgerBlue: `#1e90ff`,
  darkKhaki: "#bdb76b",
  dashInner: "#dcdcdc",
  lightGray: "#d3d3d3",
};

const {
  primary,
  secondary,
  tertiary,
  darkLight,
  brand,
  green,
  red,
  ttest,
  darkKhaki,
  dashInner,
  lightGray,
  tomato,
  dodgerBlue,
} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 30px;
  padding-top: ${StatusBarHeight + 20}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 190px;
  height: 190px;
`;
export const TitleLogo = styled.Image`
  width: 230px;
  height: 35px;
  margin-bottom: 10px;
`;
export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${dodgerBlue};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
  color: ${tertiary};
`;

//form area
export const StyledFormArea = styled.View`
  width: 100%;
`;

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 15px;
  height: 52px;
  margin-top: 3px;
  margin-bottom: 10px;
  color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 14px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 14px;
  top: 35px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 34px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${dodgerBlue};
  padding: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 48px;
  align-self: center;
  width: 250px;
  ${(props) =>
    props.google == true &&
    ` 
background-color:${green};
flex-direction:row;
justify-content:center;
`}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 17px;
  ${(props) =>
    props.google == true &&
    `
padding: 25px;
`}
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  text-align: center;
  padding: 15px;
  margin-top: -10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 20px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${dodgerBlue};
  font-size: 20px;
`;

{
  /*export const StyledCheckBox = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  background: ${(props) => (props.checked ? "red" : "black")};
  border-radius: 3px;
  `;*/
}

//Dashboards
export const DashboardContainer = styled.View`
  flex: 1;
  padding: 15px;
  padding-top: ${StatusBarHeight + 5}px;
  background-color: ${primary};
`;

export const Container1 = styled.View`
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 25px;
  height: 90px;
  background-color: ${dashInner};
`;

export const Container2 = styled.View`
  border-radius: 10px;
`;

//Base Icons
export const DashbottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 25px;
  padding-bottom: 1px;
  padding-top: 5px;
  background-color: ${primary};
`;

export const StyledText = styled.Text`
  font-weight: bold;
  color: ${tertiary};
  font-size: 16px;
`;

export const StyledText1 = styled.Text`
  font-weight: bold;
  color: ${tertiary};
  font-size: 16px;
  margin-left: 10px;
  margin-top: 30px;
`;

export const OrgnDashText = styled.Text`
  justify-content: center;
  text-align: left;
  margin-top: 10;
  margin-right: 10;
  font-weight: bold;
  color: ${tertiary};
  font-size: 14px;
`;

export const DashIcon = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

//job description input
export const StyledTextInput1 = styled.TextInput`
  flex: 1;
  background-color: ${secondary};
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
  margin-bottom: 5px;
  color: ${tertiary};
`;

//job title input
export const StyledTextInput2 = styled.TextInput`
  background-color: ${secondary};
  justify-content: center;
  padding: 15px;
  border-radius: 25px;
  font-size: 16px;
  height: 47px;
  color: ${tertiary};
`;

//post job button
export const PostButton = styled.TouchableOpacity`
  background-color: ${dodgerBlue};
  margin-bottom: 20px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-radius: 50px;
  height: 42px;
  width: 250px;
`;

//(post your job here)
export const WelcomeText = styled.Text`
  font-size: 18px;
  text-align: center;
  justify-content: center;
  font-weight: bold;
  color: ${tertiary};
  font-style: italic;
`;

export const ClearButton = styled.TouchableOpacity`
  background-color: ${dodgerBlue};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 25px;
  width: 90px;
  align-self: flex-end;
`;

export const ClearButtonText = styled.Text`
  color: ${primary};
  font-size: 12px;
  font-weight: bold;
`;

//OrgDashboard
export const JobPostContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 50px;
  width: 90px;
  align-self: center;
`;

//JobDetailsApply
export const TitleContainer = styled.View`
  border-radius: 5px;
  height: 150px;
  width: 150px;
`;

export const StartDateContainer = styled.View`
  border-radius: 5px;
  height: 150px;
  width: 150px;
`;

export const JobDescriptionContainer = styled.View`
  border-radius: 5px;
  height: 150px;
  width: 150px;
`;

export const TitleText = styled.Text`
  color: ${dodgerBlue};
  font-size: 20px;
  font-weight: bold;
`;

export const StartDateText = styled.Text`
  color: ${dodgerBlue};
  font-size: 20px;
  font-weight: bold;
`;

export const JobDescriptionText = styled.Text`
  color: ${dodgerBlue};
  font-size: 20px;
  font-weight: bold;
`;

//JobConfirmation
export const ConfirmContainer = styled.View`
  border-radius: 5px;
  height: 600px;
  width: 350px;
`;

export const ConfirmationText = styled.Text`
  color: ${darkLight};
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  margin-top: 200px;
`;

export const InnerConfirmContainer = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  height: 150px;
  width: 90px;
  align-self: center;
`;

//NavigationIcons
export const NavContainer = styled.View`
  border-radius: 5px;
  align-self: center;
  padding-top: 5px;
  margin-bottom: 10px;
`;

export const NavText = styled.Text`
  background-color: ${primary};
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

//settings
export const SettingsButton = styled.TouchableOpacity`
  background-color: ${darkLight};
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 1px;
  border-radius: 5px;
`;

export const AvailableContainer = styled.View`
  height: 30px;
  flex: 1px;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
`;

//searchBar
export const SearchBarContainer = styled.View`
  height: 50px;
  width: 95%;
  margin-left: 20px;
  margin-top: 20px;
`;

//form container
export const FormContainer = styled.View`
  width: 100%;
  height: 95%;
`;

//form container
export const FormContainer1 = styled.View`
  width: 100%;
  height: 70%;
`;

//help container
export const HelpContainer = styled.View`
  height: 60px;
  align-self: flex-end;
  margin-top: 15px;
`;

//radio container
export const RadioContainer = styled.View`
  height: 10px;
`;

//Terms and Conditions container
export const TandCContainer = styled.View`
  height: 10px;
  margin-left: 100px;
  margin-top: -6px;
`;

//radio Text
export const RadioText = styled.Text`
  font-size: 17px;
`;

//Terms and Conditions Text
export const TCText = styled.Text`
  font-size: 17px;
  color: ${dodgerBlue};
`;

//switch Text
export const SwitchText = styled.Text`
  font-size: 25px;
  margin-top: 100px;
`;
