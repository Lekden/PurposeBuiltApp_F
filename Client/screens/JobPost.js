import React, { useState } from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";

//formik for form
import { Formik } from "formik";

import UploadDoc from "../components/UploadDoc";

//icons
import { Octicons } from "@expo/vector-icons";
//colors
const { brand, darkLight, primary, dodgerBlue, dashInner } = Colors;

//date and time
import DateTimePicker from "@react-native-community/datetimepicker";

import {
  Colors,
  DashboardContainer,
  PageTitle,
  StyledFormArea,
  ClearButton,
  ClearButtonText,
  MsgBox,
  PostButton,
  ButtonText,
  StyledInputLabel,
  StyledTextInput2,
  LeftIcon,
  StyledTextInput,
  StyledTextInput1,
  FormContainer,
} from "../components/style";
import { ScrollView } from "react-native-gesture-handler";
import UserState from "../utils/user";
import request from "../utils/request";
const JobPost = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [date, setDate] = useState(new Date(2021, 0, 1));
  const [dateA, setDateA] = useState(new Date(2021, 0, 1));

  //actual date of birth to be entered
  const [startDate, setStartDate] = useState();

  //actual date of birth to be entered
  const [endDate, setEndDate] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setStartDate(currentDate);
  };

  const onChangeA = (event, selectedEndDate) => {
    const futureDate = selectedEndDate || dateA;
    setShowEnd(false);
    setDateA(futureDate);
    setEndDate(futureDate);
  };
  const showDatePicker = () => {
    setShow(true);
  };
  const showDatePickerA = () => {
    setShowEnd(true);
  };

  return (
    <DashboardContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />
      <PageTitle>Post your job here</PageTitle>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      {showEnd && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateA}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeA}
        />
      )}

      <Formik
        initialValues={{
          title: "",
          dateStart: "",
          dateEnd: "",
          setText: "",
        }}
        onSubmit={(values) => {
          values = { ...values, dateStart: startDate, dateEnd: endDate };
          //console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          values,
        }) => (
          <StyledFormArea>
            <ScrollView>
              <FormContainer>
                <MyTextInput
                  label="Job Title"
                  placeholder="eg. Data entry"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("title")}
                  onBlur={handleBlur("title")}
                  value={values.title}
                />
                <MyTextInput1
                  label="Start Date"
                  icon="calendar"
                  placeholder="dd-mm-yyyy"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("dateStart")}
                  onBlur={handleBlur("dateStart")}
                  value={startDate ? startDate.toDateString() : ""}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePicker}
                />

                <MyTextInput1
                  label="End Date"
                  icon="calendar"
                  placeholder="dd-mm-yyyy"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("dateEnd")}
                  onBlur={handleBlur("dateEnd")}
                  value={endDate ? endDate.toDateString() : ""}
                  isDate={true}
                  editable={false}
                  showDatePicker={showDatePickerA}
                />
                <MyTextInput2
                  label="Job Description"
                  placeholder="Start typing or paste content"
                  placeholderTextColor={darkLight}
                  multiline={true}
                  textAlignVertical="top" //android only
                  onChangeText={handleChange("setText")}
                  onBlur={handleBlur("setText")}
                  value={values.setText}
                />

                <ClearButton
                  onPress={() => {
                    setFieldValue("setText", "");
                  }}
                >
                  <ClearButtonText>Clear Text</ClearButtonText>
                </ClearButton>

                <UploadDoc />
                <MsgBox>... </MsgBox>

                <PostButton
                  onPress={() => {
                    const body = {
                      title: values["title"],
                      description: values["setText"],
                      startDate: startDate,
                      endDate: endDate,
                      email: UserState.email,
                    };

                    /* organisation posting work */
                    request
                      .post({
                        url: "job/post",
                        data: body,
                      })
                      .then((res) => {
                        if (res.code == 200) {
                          alert("Post Job Success!");
                          setFieldValue("setText", "");
                          setFieldValue("dateStart", "");
                          setFieldValue("dateEnd", "");
                          setFieldValue("title", "");
                          setStartDate("");
                          setEndDate("");
                          navigation.navigate("MyJobs");
                        }
                      });
                  }}
                  type="reset"
                >
                  <ButtonText>Post Job</ButtonText>
                </PostButton>
              </FormContainer>
            </ScrollView>
          </StyledFormArea>
        )}
      </Formik>
    </DashboardContainer>
  );
};

const MyTextInput = ({ label, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput2 {...props} />
    </View>
  );
};

const MyTextInput1 = ({ label, icon, isDate, showDatePicker, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={dodgerBlue} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const MyTextInput2 = ({ label, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput1 {...props} />
    </View>
  );
};

export default JobPost;
