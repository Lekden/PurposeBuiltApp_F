import React, { useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");

//searchbar
import { SearchBar } from "react-native-elements";

import HelpIcon from "../components/HelpIcon";

import {
  DashboardContainer,
  Container2,
  NavText,
  NavContainer,
  TextLink,
  SearchBarContainer,
  HelpContainer,
} from "../components/style";

import request from "../utils/request";
import UserState from "../utils/user";
const UserInbox = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [userjobs, setUserjobs] = useState([]);
  const [fetchList, setFetchList] = useState(true);

  if (fetchList) {
    /* Get the message list, which is the data of the user's request for work */
    request.get("userJob/list/" + UserState.email).then((res) => {
      setUserjobs(res.userJobs);
      setFetchList(false);
    });
  }

  let i = 0;

  const UserJobs = userjobs.map((userjob) => {
    return (
      <View key={i++} style={styles.cardView}>
        <Text style={styles.title}>Job Title: {userjob.title}</Text>
        <Text style={styles.title}>Applicant Name: {userjob.name}</Text>
        <Text style={styles.email}>Applicant Email: {userjob.email}</Text>
        <Text style={styles.jobID}>Job Id: {userjob.jobId}</Text>
      </View>
    );
  });

  return (
    <DashboardContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#00BCD4"
        translucent={true}
      />
      <SearchBarContainer>
        <SearchBar
          round={true}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => {
            setSearchText(text);
            if (text) {
              request.get(`userJob/searchlist/${text}`).then((res) => {
                setUserjobs(res.jobs);
              });
            } else UserInbox();
          }}
          onPressCancel={() => {
            this.filterList("");
          }}
          placeholder="search your job here"
          value={searchText}
          showLoading={true}
          showCancel={true}
          platform={"android"}
        />
      </SearchBarContainer>

      <HelpContainer>
        <TextLink onPress={() => navigation.navigate("SocialWorker")}>
          <HelpIcon label="HELP" icon="hands-helping" />
        </TextLink>
      </HelpContainer>
      <NavContainer>
        <NavText> My Messages </NavText>
      </NavContainer>

      <ScrollView>
        <Container2>{UserJobs}</Container2>
      </ScrollView>
    </DashboardContainer>
  );
};

export default UserInbox;

const styles = StyleSheet.create({
  title: {
    width: width,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  jobID: {
    width: width,
    color: "black",
    fontSize: 14,
  },
  email: {
    justifyContent: "center",
    color: "black",
    fontSize: 14,
  },
  cardView: {
    backgroundColor: "white",
    borderRadius: width * 0.02,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 2,
    padding: 5,
  },
});
