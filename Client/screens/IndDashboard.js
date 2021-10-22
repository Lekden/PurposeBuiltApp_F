import React, { useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");
//searchbar
import { SearchBar } from "react-native-elements";

import HelpIcon from "../components/HelpIcon";

// keyboard avoiding view
import KeyboardWrapperAvoid from "../components/KeyboardWrapperAvoid";

import {
  DashboardContainer,
  Container2,
  StyledText,
  TextLink,
  SearchBarContainer,
  HelpContainer,
  WelcomeText,
} from "../components/style";

import request from "../utils/request";

import UserState from "../utils/user";

const IndDashboard = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isinit, setIsinit] = useState(false);

  /* Get all jobs data*/
  initAllJobs = () => {
    request.get("job/list").then((res) => {
      setJobs(res.jobs);
    });
  };

  /* If not initialised */
  if (!isinit) {
    /* Get all jobs */
    initAllJobs();
    setIsinit(true);
  }

  /* job Card for each job */
  const jobsList = jobs.map((item) => {
    return (
      <View key={item["_id"]} style={styles.cardView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("JobConfirmation", {
              jobId: item["_id"],
              orgEmail: item["email"],
              title: item["title"],
              name: UserState.name,
              email: UserState.email,
            });
          }}
        >
          <Text style={styles.title}>Title:{item.title}</Text>
          <Text style={styles.title}>Company Name:{UserState.name}</Text>
          <Text style={styles.description}>
            Description:{item.description}{" "}
          </Text>
          <Text style={styles.date}>Start Date:{item.startDate}</Text>
          <Text style={styles.date}>End Date :{item.endDate}</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <DashboardContainer>
      <SearchBarContainer>
        <SearchBar
          round={true}
          searchIcon={{ size: 24 }}
          onChangeText={(text) => {
            setSearchText(text);
            if (text) {
              request.get(`job/searchlist/${text}`).then((res) => {
                setJobs(res.jobs);
              });
            } else initAllJobs();
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
      <WelcomeText> Welcome {UserState.name} </WelcomeText>
      <StyledText> All Jobs </StyledText>
      <ScrollView>
        <Container2>{jobsList}</Container2>
      </ScrollView>
    </DashboardContainer>
  );
};

export default IndDashboard;

const styles = StyleSheet.create({
  title: {
    width: width,
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  date: {
    width: width,
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
  },
  description: {
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
    marginBottom: 23,
  },
});
