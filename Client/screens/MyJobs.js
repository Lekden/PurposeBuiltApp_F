import React, { useState } from "react";
import { View, StatusBar, ScrollView, Text } from "react-native";

import HelpIcon from "../components/HelpIcon";

//searchbar
import { SearchBar } from "react-native-elements";

import {
  DashboardContainer,
  Container2,
  NavText,
  NavContainer,
  TextLink,
  HelpContainer,
  SearchBarContainer,
} from "../components/style";

import request from "../utils/request";
import UserState from "../utils/user";

const MyJobs = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState([]);
  const [fetchList, setFetchList] = useState(true);

  // function reloadThePage() {
  //   window.location.reload();
  // }

  if (fetchList) {
    /* Get the message list, which is the data of the user's request for work */
    if (UserState.role === 2) {
      request.get("job/list/" + UserState.email).then((res) => {
        setJobs(res.jobs);
        setFetchList(false);
      });
    } else {
      request.get("UserJob/JobList/" + UserState.email).then((res) => {
        setJobs(res.jobs);
        setFetchList(false);
      });
    }
  }

  let i = 0;

  const Jobs = jobs.map((jobs) => {
    return (
      <View
        style={{
          padding: 10,
          borderBottomColor: "#e5e5e5",
          borderBottomWidth: 2,
        }}
        key={i++}
      >
        <Text>Job Title: {jobs.title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Job Id: {jobs._id}</Text>
          <Text
            onPress={() => {
              /* Request work API */

              if (UserState.role === 2) {
                navigation.navigate("MyJobs");
                request.delete("Job/" + jobs._id).then((res) => {
                  alert(res.title + " " + "removed successfully");
                });
              } else {
                navigation.navigate("MyJobs");
                request.delete("UserJob/" + jobs._id).then((res) => {
                  alert(res.title + " " + "removed successfully");
                });
              }
            }}
          >
            Remove
          </Text>
        </View>
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
              if (UserState.role === 2) {
                request.get(`job/searchlist/${text}`).then((res) => {
                  setJobs(res.jobs);
                });
              }
              if (UserState.role === 1 || 0) {
                request.get(`UserJob/searchlist/${text}`).then((res) => {
                  setJobs(res.jobs);
                });
              }
            }
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
        <NavText> My Jobs </NavText>
      </NavContainer>

      <ScrollView>
        <Container2>{Jobs}</Container2>
      </ScrollView>
    </DashboardContainer>
  );
};

export default MyJobs;
