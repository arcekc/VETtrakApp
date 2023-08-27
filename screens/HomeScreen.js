import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Icon } from "react-native-elements";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const user = {
    photo: require("../assets/images/kc.png"),
    name: "KC Marie",
    userId: "12200387",
    lastLogin: new Date().toLocaleString(),
  };

  const upcomingEvents = [
    { name: "Midterm Exams", date: "2023-08-25", time: "3:00 PM" },
    { name: "Assessment 3 Submission", date: "2023-09-15", time: "2:00 PM" },
    // Add more events as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.kc}>
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.idCardLink}
            onPress={() => navigation.navigate("IDCardScreen")}
          >
            <Icon
              type="font-awesome-5"
              name="address-card"
              color="#007FFF"
              size={20}
            />
            <Text style={styles.idCardLinkText}>Digital ID</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
          <Image source={user.photo} style={styles.profilePhoto} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>Hi, {user.name}</Text>
            <Text style={styles.userId}>{user.userId}</Text>
            <Text style={styles.lastLogin}>Last signed into the app:</Text>
            <Text style={styles.lastLogin}>{user.lastLogin}</Text>
          </View>
        </View>

        <View style={styles.upcomingEventsContainer}>
          <Text style={styles.sectionTitle}>Upcoming Events</Text>
          {upcomingEvents.map((event, index) => (
            <View key={index} style={styles.eventCard}>
              <View style={styles.eventInfo}>
                <Image
                  style={styles.calendarIcon}
                  source={require('../assets/calendar.png')}
                />
                <View style={styles.eventText}>
                  <Text style={styles.eventTitle}>{event.name}</Text>
                  <Text>Date: {event.date}</Text>
                  <Text>Time: {event.time}</Text>
                </View>
                <TouchableOpacity>
                <Icon
                  type="material-community"
                  name="chevron-right"
                  color="#007AFF"
                />
                </TouchableOpacity>
                
              </View>
            </View>
          ))}
        </View>

        <View style={styles.functionCardsContainer}>
          {/* Timetable Card */}
          <View style={styles.functionCard}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>TIMETABLE</Text>
              <Icon
                type="material-community"
                name="calendar-month-outline"
                color="#fff"
              />
            </View>
            <View style={styles.cardBody}>
              <Text>Monday: </Text>
              <Text>9:00 - 14:00</Text>
            </View>
            <View style={styles.cardBody}>
              <Text>Tuesday:</Text>
              <Text>9:00 - 15:00</Text>
            </View>
            <View style={styles.cardBody}>
              <Text>Friday:</Text>
              <Text>13:00 - 17:00</Text>
            </View>
          </View>

          {/* Attendance Card */}
          <View style={styles.functionCard}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>ATTENDANCE</Text>
              <Icon
                type="material-community"
                name="calendar-check-outline"
                color="#fff"
              />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.green}>Presents:</Text>
              <Text style={styles.green}>70%</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.red}>Absents:</Text>
              <Text style={styles.red}>30%</Text>
            </View>
            <View style={styles.cardBody}>
              <Text>Excused</Text>
              <Text>Nil</Text>
            </View>
          </View>

          {/* Grades Card */}
          <View style={styles.functionCard}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>GRADES</Text>
              <Icon
                type="material-community"
                name="text-box-check-outline"
                color="#fff"
              />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.green}>ICTSAS579</Text>
              <Text style={styles.green}>C</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.red}>ICICT420</Text>
              <Text style={styles.red}>NYC</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.red}>ICTNWK502</Text>
              <Text style={styles.red}>NYC</Text>
            </View>
          </View>

          {/* Fees Card */}
          <View style={styles.functionCard}>
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>FEES</Text>
              <Icon type="font-awesome" name="dollar" color="#fff" />
            </View>
            <View style={styles.cardBody}>
              <Text>Fees due:</Text>
              <Text>$575.00</Text>
            </View>
            <View style={styles.cardBody}>
              <Text>Due date:</Text>
              <Text>21 Jul 2023</Text>
            </View>
            <View style={styles.cardBody}>
              <Text>Next due:</Text>
              <Text>30 Aug 2023</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2EAFF",
  },
  kc: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    borderTopRightRadius: 33,
    overflow: "hidden",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  profilePhoto: {
    width: 60,
    height: 80,
    borderRadius: 30,
    marginRight: 10,
    borderColor: "#E3E4E5",
    borderWidth: 1,
  },
  userInfo: {
    flex: 1,
    marginRight: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 3,
  },
  userId: {
    fontSize: 14,
    color: "#1D232E",
    marginBottom: 3,
  },
  lastLogin: {
    fontSize: 12,
    color: "#6D7072",
  },
  upcomingEventsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  eventCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
  },
  functionCardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  functionCard: {
    width: "48%",
    aspectRatio: 1,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
  },
  cardTitleContainer: {
    backgroundColor: "#24628F",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "white",
  },
  cardBody: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#ddd",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  idCardLink: {
    flexDirection: "row",
    alignItems: "center",
  },
  idCardLinkText: {
    marginLeft: 5,
    color: "#007AFF",
    textDecorationLine: "underline",
    fontSize: 15,
  },
  cardContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  green: {
    color: '#006D04'
  },
  red: {
    color: '#CC222F'
  },
  eventCard: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginBottom: 10,
  },
  eventInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  calendarIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  eventText: {
    flex: 1,
  },
  readMoreLink: {
    alignSelf: "flex-end",
  },
  readMoreText: {
    color: "#007AFF",
    textDecorationLine: "underline",
    fontSize: 15,
  },
  eventTitle: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 25
  }
});

export default HomeScreen;
