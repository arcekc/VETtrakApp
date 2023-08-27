import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VTLogin from "../screens/VTLogin.js";
import OnboardingScreen from "../screens/OnboardingScreen.js";
import UserLogin from "../screens/UserLogin.js";
import HomeScreen from "../screens/HomeScreen.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AcademicsScreen from "../screens/AcademicsScreen.js";
import CommunicationScreen from "../screens/CommunicationScreen.js";
import FinancesScreen from "../screens/FinancesScreen.js";
import NotificationsScreen from "../screens/NotificationsScreen.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import SplashScreen from "../screens/SplashScreen.js";
import {
  Text,
  Pressable,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
  Image,
  Alert,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import EmailDetailScreen from "../screens/EmailDetailScreen.js";
import HelpScreen from "../screens/HelpScreen.js";
import IDCardScreen from "../components/IDCardScreen.js";
import NotificationDetailScreen from "../screens/NotificationDetailScreen.js";
import AccountSettingsScreen from "../screens/AccountSettingsScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";

const Tab = createBottomTabNavigator();

function HomeTabHeaderLeft() {
  return (
    <View style={styles.headerLeftContainer}>
      <Image
        source={require("../assets/koi-favicon.png")} // Replace with your logo image source
        style={styles.koi}
      />
    </View>
  );
}

function BottomTabs() {
  const [iconColor, setIconColor] = useState("black");
  const handleIconPress = () => {};

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: { backgroundColor: "#A3D4FF" },
        headerRight: () => {
          // console.log(route.name)

          if (route.name === "Communication") {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: 10,
                }}
              >
                <TouchableOpacity onPress={handleIconPress}>
                  <Icon
                    type="material-community"
                    name="pencil-box-outline"
                    size={30}
                    // color={iconColor}
                  />
                </TouchableOpacity>
              </View>
            );
          }

          if (route.name === "King's Own Institute") {
            return (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingRight: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate("AccountSettingsScreen")}
                >
                  <Icon
                    type="material"
                    name="account-circle"
                    size={35}
                    color="#242526"
                  />
                </TouchableOpacity>
              </View>
            );
          }
        },
      })}
    >
      <Tab.Screen
        name="King's Own Institute"
        options={{
          tabBarLabel: "Home ",
          headerShadowVisible: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarActiveTintColor: "black", // Active tab icon color
          headerStyle: {
            backgroundColor: "#D2EAFF",
            height: 110,
          },
          headerLeft: () => <HomeTabHeaderLeft />,
          headerTitleAlign: "left", // Align the header title to the left
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Communication"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="email" color={color} size={size} />
          ),
          tabBarBadge: 4,
          tabBarBadgeStyle: { backgroundColor: "#CC222F" },
          tabBarActiveTintColor: "black",
          headerTitleAlign: 'center',
        }}
        component={CommunicationScreen}
      />
      <Tab.Screen
        name="Academics"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="school" color={color} size={size} />
          ),
          tabBarActiveTintColor: "black",
          headerTitleAlign: 'center',
        }}
        component={AcademicsScreen}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: { backgroundColor: "#CC222F" },
          tabBarActiveTintColor: "black",
          headerTitleAlign: 'center',
        }}
        component={NotificationsScreen}
      />
      <Tab.Screen
        name="Finances"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card"
              color={color}
              size={size}
            />
          ),
          tabBarActiveTintColor: "black",
          headerTitleAlign: 'center',
        }}
        component={FinancesScreen}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function AppNavigation({ navigation }) {
  const [isHelpModalVisible, setHelpModalVisible] = useState(false);

  const handleHelpIconPress = () => {
    setHelpModalVisible(true);
  };

  const closeModal = () => {
    setHelpModalVisible(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash Screen">
        <Stack.Screen
          name="splashScreen"
          options={{ headerShown: false }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Onboarding"
          options={{ headerShown: false }}
          component={OnboardingScreen}
        />
        <Stack.Screen
          name="vtLogin"
          options={{ headerShown: false }}
          component={VTLogin}
        />
        <Stack.Screen
          name="userLogin"
          component={UserLogin}
          options={({ navigation }) => ({
            title: "Sign In",
            headerShadowVisible: false,
            headerRight: () => (
              <TouchableOpacity onPress={handleHelpIconPress}>
                <Icon
                  name="lifebuoy"
                  type="material-community"
                  color=""
                  size={25}
                />
              </TouchableOpacity>
            ),
            headerTintColor: "#000",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrowleft"
                  type="ant-design"
                  color="#000"
                  size={25}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="homeScreen"
          options={{ headerBackVisible: false, headerShown: false }}
          component={BottomTabs}
        />
        <Stack.Screen
          name="EmailDetail"
          component={EmailDetailScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#A3D4FF",
            },
            headerTintColor: "#000",
            title: "Message",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrowleft"
                  type="ant-design"
                  color="#000"
                  size={25}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="HelpScreen"
          component={HelpScreen}
          options={({ navigation }) => ({
            // headerTitle: HelpScreen.navigationOptions.headerTitle,
            title: "Help",
            headerTitleAlign: "left",
            headerBackVisible: false,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="close"
                  type="material-community"
                  color="#CC222F"
                  size={25}
                />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="IDCardScreen"
          component={IDCardScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#A3D4FF",
            },
            headerTintColor: "#000",
            title: "Digital ID Card",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="closecircleo"
                  type="ant-design"
                  color="#000"
                  size={25}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="NotificationDetailScreen"
          component={NotificationDetailScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#A3D4FF",
            },
            headerTintColor: "#000",
            title: "Notification",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrowleft"
                  type="ant-design"
                  color="#000"
                  size={25}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="AccountSettingsScreen"
          component={AccountSettingsScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#A3D4FF",
            },
            title: "Account Settings",
            headerTintColor: "#000",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="closecircleo"
                  type="ant-design"
                  color="#000"
                  size={25}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={({ navigation }) => ({
            headerStyle: {
              backgroundColor: "#A3D4FF",
            },
            title: "Profile",
            headerTintColor: "#000",
            headerBackTitleVisible: false,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon
                  name="arrowleft"
                  type="ant-design"
                  color="#000"
                  size={25}
                />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
      <Modal
        visible={isHelpModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Help</Text>
            <Text style={styles.modalText}>
              If you have problems logging in, try again later or contact your
              school or learning provider.
            </Text>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: StyleSheet.hairlineWidth,
                alignSelf: "stretch",
              }}
            />
            <Pressable onPress={closeModal} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 30,
    alignItems: "center",
    // shadowOpacity: 5
  },
  modalText: {
    fontSize: 15,
    marginBottom: 20,
    color: "#5D6470",
    lineHeight: 23,
    textAlign: "center",
  },
  closeButton: {
    marginTop: 10,
    padding: 0,
    // borderRadius: 5,

    // backgroundColor: "#A3D4FF",
  },
  closeButtonText: {
    color: "#007FFF",
    fontWeight: "500",
    fontSize: 16,
  },
  modalHeader: {
    fontSize: 19,
    marginBottom: 20,
    fontWeight: "600",
  },
  koi: {
    marginLeft: 20,
    // height: 30,
    // width: 30
  },
});
