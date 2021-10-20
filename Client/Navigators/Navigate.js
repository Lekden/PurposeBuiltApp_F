import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

//react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import Login from "./screens/Login";
import Register from "./screens/Register";
import IndDashboard from "./screens/IndDashboard";
import JobPost from "./screens/JobPost";
import SocialWorker from "./screens/SocialWorker";
import RegisterOrg from "./screens/RegisterOrg";
import SWDashboard from "./screens/SWDashborad";
import OrgDashboard from "./screens/OrgDashboard";
import JobConfirmation from "./screens/JobConfirmation";
import UserInbox from "./screens/UserInbox";
import Settings from "./screens/Settings";
import ITHelpFeedback from "./screens/ITHelpFeedback";
import MyJobs from "./screens/MyJobs";
import TermsandConditions from "./screens/TermsandConditions";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "My Messages") {
            iconName = focused ? "envelope" : "envelope";
          } else if (route.name === "Help") {
            iconName = focused ? "hands-helping" : "hands-helping";
          } else if (route.name === "Settings") {
            iconName = focused ? "cog" : "cog";
          } else if (route.name === "My Jobs") {
            iconName = focused ? "briefcase" : "briefcase";
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={IndDashboard}
        options={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          height: 30,
          tabBarShowLabel: true,
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      />

      <Tab.Screen
        name="My Messages"
        component={UserInbox}
        options={{
          tabBarBadge: "",
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          height: 30,
          tabBarShowLabel: true,
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      />

      <Tab.Screen
        name="My Jobs"
        component={MyJobs}
        options={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          height: 30,
          tabBarShowLabel: true,
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
          height: 30,
          tabBarShowLabel: true,
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },

          headerTintColor: "tomato",
          headerTransparent: true,
          headerTitle: "",
          headerSearchBarOptions: true,
          headerShadowVisible: false,
          headerBackTitle: true,
          headerLeftContainerStyle: {},
          backgroundColor: "transparent",
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="IndDashboard" component={Tabs} />
        <Stack.Screen name="JobPost" component={JobPost} />
        <Stack.Screen name="SocialWorker" component={SocialWorker} />
        <Stack.Screen name="RegisterOrg" component={RegisterOrg} />
        <Stack.Screen name="SWDashboard" component={SWDashboard} />
        <Stack.Screen name="OrgDashboard" component={Tabs} />
        <Stack.Screen name="JobDetailsApply" component={Tabs} />
        <Stack.Screen name="JobConfirmation" component={JobConfirmation} />
        <Stack.Screen name="UserInbox" component={Tabs} />
        <Stack.Screen name="Settings" component={Tabs} />
        <Stack.Screen name="ITHelpFeedback" component={Tabs} />
        <Stack.Screen name="MyJobs" component={Tabs} />
        <Stack.Screen
          name="TermsandConditions"
          component={TermsandConditions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default createAppContainer(App);
