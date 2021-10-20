import React, { useState } from "react";
import { View, StatusBar, ScrollView, Text } from "react-native";
import { ButtonText, StyledButton } from "../components/style";

//searchbar
import { SearchBar } from "react-native-elements";

import {
  DashboardContainer,
  Container2,
  StyledText1,
  SearchBarContainer,
} from "../components/style";

import request from "../utils/request";

const SocialWorker = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [list, setList] = useState([]);
  const [init, setInit] = useState(false);

  if (!init)
    /* Get all online SocialWorker */
    request.get("user/SocialWorker").then(({ list }) => {
      setList(list);
      setInit();
    });

  let i = 0;
  const List = list.map((user) => {
    return (
      <View
        key={i++}
        style={{
          padding: 20,
          borderBottomColor: "#e5e5e5",
          borderBottomWidth: 2,
        }}
      >
        <Text>Name: {user.name}</Text>
        <Text>Phone: {user.phone}</Text>
        <Text>CompanyAddress:{user.companyAddress}</Text>
        <View style={{ display: "flex" }}>
          <StyledButton>
            <ButtonText>Send Help Message</ButtonText>
          </StyledButton>
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
      <StyledButton>
        <ButtonText>Click for Admin Support</ButtonText>
      </StyledButton>
      <StyledText1> Social Workers Online </StyledText1>
      <ScrollView>
        <Container2>{List}</Container2>
      </ScrollView>
    </DashboardContainer>
  );
};

export default SocialWorker;
