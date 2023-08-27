import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

function AccountSettingsScreen({ navigation }) {
  const user = {
    photo: require("../assets/images/kc.png"),
    name: "KC Marie Arce",
    userId: "12200387",
    lastLogin: new Date().toLocaleString(),
  };

  const handleProfileClick = () => {
    navigation.navigate("ProfileScreen", { user });
  };

  const handleSignOut = () => {
    // Perform sign out logic here

    // Navigate to the UserLogin screen
    navigation.navigate("UserLogin"); // Replace "UserLogin" with the actual screen name
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={user.photo} style={styles.profilePhoto} />
        <Text style={styles.title}>{user.name}</Text>
      </View>

      <View style={styles.groupContainer}>
        {/* Profile Management */}
        <TouchableOpacity style={styles.option} onPress={handleProfileClick}>
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon type="feather" name="user" size={20} />
            </View>
            <Text style={styles.optionText}>Profile</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>

        {/* Sign In Options */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon type="feather" name="lock" size={20} />
            </View>
            <Text style={styles.optionText}>Sign in options</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>

        {/* Notification Settings */}
        <TouchableOpacity style={styles.optionLast}>
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon type="feather" name="bell" size={20} />
            </View>
            <Text style={styles.optionText}>Notification settings</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.groupContainer}>
        {/* Help */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon type="feather" name="life-buoy" size={20} />
            </View>
            <Text style={styles.optionText}>Help</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>

        {/* Terms and Conditions */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon type="feather" name="file" size={20} />
            </View>
            <Text style={styles.optionText}>Terms and conditions</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>

        {/* Feedback */}
        <TouchableOpacity style={styles.optionLast}>
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon type="feather" name="message-square" size={20} />
            </View>
            <Text style={styles.optionText}>Feedback</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.groupContainer}>
        {/* Go to Website */}
        <TouchableOpacity style={styles.optionLast}>
          <View style={styles.optionRow}>
            <View style={styles.optionIcon}>
              <Icon type="feather" name="globe" size={20} />
            </View>
            <Text style={styles.optionText}>Go to Website</Text>
            <Icon type="feather" name="arrow-up-right" size={20} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Sign Out */}
      <TouchableOpacity
        style={styles.signOutButton}
        onPress={() => navigation.navigate("userLogin")}
      >
        <Text style={styles.bold}>Sign out</Text>
      </TouchableOpacity>

      {/* Last Login Details */}
      <View style={styles.padding}>
        <Text style={styles.lastLogin}>Last signed into the app:</Text>
        <Text style={styles.lastLogin}>{user.lastLogin}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 20,
  },
  option: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#D6D9DB",
    backgroundColor: "#F5F5F5",
  },
  signOutButton: {
    backgroundColor: "#fff",
    borderColor: "#016FD0",
    borderWidth: 2,
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  lastLogin: {
    marginTop: 10,
    color: "#888",
    textAlign: "center",
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderColor: "#E3E4E5",
    borderWidth: 1,
  },
  lastLogin: {
    fontSize: 12,
    color: "#6D7072",
    textAlign: "center",
  },
  groupContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
  option: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#D6D9DB",
    backgroundColor: "#F5F5F5",
  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionIcon: {
    marginRight: 10,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  optionLast: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#F5F5F5",
  },
  bold: {
    fontWeight: "700",
    color: "#016FD0",
    fontSize: 16,
  },
  padding: {
    marginBottom: 50,
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default AccountSettingsScreen;
