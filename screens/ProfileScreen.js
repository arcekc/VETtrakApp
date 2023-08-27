import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";

function ProfileScreen({ navigation }) {
//   const { user } = route.params;

  const users = {
    photo: require("../assets/images/kc.png"),
    givenName: "KC Marie",
    familyName: "Arce",
    dateOfBirth: "25 April 1995",
    usi: "L5GJUEAAKJ",
    userId: "12200387",
    lastLogin: new Date().toLocaleString(),
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>PERSONAL DETAILS</Text>
      <View style={styles.personalDetails}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.textValue}>{users.userId}</Text>
          <Text style={styles.title}>Student ID</Text>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.textValue}>{users.givenName}</Text>
          <Text style={styles.title}>Given name(s)</Text>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.textValue}>{users.familyName}</Text>
          <Text style={styles.title}>Family name</Text>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.textValue}>{users.dateOfBirth}</Text>
          <Text style={styles.title}>Date of birth</Text>
        </View>

        <View style={styles.userInfoContainer}>
          <Text style={styles.textValue}>{users.usi}</Text>
          <Text style={styles.title}>Unique Student Identifier (USI)</Text>
        </View>

        <Text style={styles.reminderText}>
          If you have recently changed your name, we kindly request you to get
          in touch with our Student Services team.
        </Text>
      </View>

      <View style={styles.groupContainer}>
        <Text style={styles.heading}>CONTACT DETAILS</Text>
        {/* Phone */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Phone</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>

        {/* Email */}
        <TouchableOpacity style={styles.option}>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Email</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>

        {/* Address */}
        <TouchableOpacity style={styles.optionLast}>
          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Address</Text>
            <Icon type="feather" name="chevron-right" size={20} />
          </View>
        </TouchableOpacity>

        <Text style={styles.reminderText}>
          If you have recently changed your any details above, we kindly request
          that you update this information within 7 days.
        </Text>
      </View>

      {/* Last Login Details */}
      <View style={styles.padding}>
        <Text style={styles.lastLogin}>Last updated details:</Text>
        <Text style={styles.lastLogin}>{users.lastLogin}</Text>
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
  heading: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 10,
    color: "#838589",
    marginTop: 30,
  },
  groupContainer: {
    marginTop: 10,
    marginBottom: 20,
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
  lastLogin: {
    fontSize: 12,
    color: "#6D7072",
    textAlign: "center",
  },
  reminderText: {
    fontSize: 12,
    color: "#6D7072",
    textAlign: "left",
    marginTop: 10,
  },
  personalDetails: {
    borderWidth: 1,
    borderColor: "#A1A5AC",
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 14,
    color: '#5E6067'
  },
  userInfoContainer: {
    marginBottom: 15
  },
  textValue: {
    fontSize: 16
  }
});

export default ProfileScreen;
