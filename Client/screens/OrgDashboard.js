import React, { useState } from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

//searchbar
import { SearchBar } from "react-native-elements";

const { width, height } = Dimensions.get("window");
import {
  DashboardContainer,
  Container2,
  ButtonText,
  StyledButton,
  StyledText,
  JobPostContainer,
  SearchBarContainer,
  SubTitle,
} from "../components/style";
import request from "../utils/request";
import UserState from "../utils/user";

const OrgDashboard = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isinit, setIsinit] = useState(false);

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
  /*job card for each job */
  const jobsList = jobs.map((item) => {
    return (
      <View key={item["_id"]} style={styles.cardView}>
        <Text style={styles.title}>Title:{item.title}</Text>
        <Text style={styles.title}>Company Name:{UserState.name}</Text>
        <Text style={styles.description}>Description:{item.description}</Text>
        <Text style={styles.date}>Start Date:{item.startDate}</Text>
        <Text style={styles.date}>End Date :{item.endDate}</Text>
      </View>
    );
  });

  console.log(jobsList);

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
              request.get(`job/searchList/${text}`).then((res) => {
                setJobs(res.jobs);
              });
            } else initAllJobs();
          }}
          onPressCancel={() => {
            this.filterList("");
          }}
          placeholder="search jobs here"
          value={searchText}
          showLoading={true}
          showCancel={true}
          platform={"android"}
        />
      </SearchBarContainer>
      <SubTitle> Welcome {UserState.name} Admin </SubTitle>
      <StyledText> All Jobs </StyledText>
      <ScrollView>
        <Container2>{jobsList}</Container2>
      </ScrollView>
      <JobPostContainer>
        <StyledButton onPress={() => navigation.navigate("JobPost")}>
          <ButtonText>Post a Job</ButtonText>
        </StyledButton>
      </JobPostContainer>
    </DashboardContainer>
  );
};

export default OrgDashboard;

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
