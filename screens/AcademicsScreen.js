import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import { LineChart } from "react-native-chart-kit";
// import PieChart from "react-native-pie-chart";
import Svg, { G, Circle } from "react-native-svg";

const AcademicsScreen = () => {
  const radius = 70;
  const circleCircumference = 2 * Math.PI * radius;

  const leftToSpendAmount = 300;
  const targetAmount = 1000;

  const spentAmount = targetAmount - leftToSpendAmount;
  const percentage = (spentAmount / targetAmount) * 100;
  const strokeDashoffset =
    circleCircumference - (circleCircumference * percentage) / 100;

  const [activeTab, setActiveTab] = useState("Attendance");

  const weeklyAttendance = [
    { week: "1: (25/01/2023 - 31/01/2023)", status: "15.75" },
    { week: "2: (01/02/2021 - 07/02/2021)", status: "20" },
    { week: "3: (08/02/2021 - 14/02/2021)", status: "0" },
    { week: "4: (15/02/2023 - 21/02/2023)", status: "0" },
    { week: "5: (22/02/2023 - 28/02/2023)", status: "10" },
    { week: "6: (01/03/2023 - 07/03/2023)", status: "8" },
    { week: "7: (08/03/2023 - 14/03/2023)", status: "20" },
    { week: "8: (15/03/2023 - 21/03/2023)", status: "20" },
    { week: "9: (22/03/2023 - 28/03/2023)", status: "16" },
    { week: "10: (29/03/2023 - 04/04/2023)", status: "20" },
  ];

  const nextClass = {
    subject: "Unit: ICTSAS527 Manage client problems",
    time: "Date & Time: Wednesdays, 10AM - 5PM",
    room: "Location: Classroom 1",
  };

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.sharedTabStyle,
            activeTab === "Attendance" ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => toggleTab("Attendance")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "Attendance" && styles.activeTabText,
            ]}
          >
            Attendance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            styles.sharedTabStyle,
            activeTab === "Grades" ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => toggleTab("Grades")}
        >
          <Text
            style={[
              styles.tabButtonText,
              activeTab === "Grades" && styles.activeTabText,
            ]}
          >
            Grades
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === "Attendance" && (
        <>
          <Text style={styles.subHeader}>
            <Text style={styles.courseText}>Course:</Text> ICT50220 Diploma of
            Information Technology
          </Text>
          <View style={styles.graphWrapperLeft}>
            <Svg height="160" width="160" viewBox="0 0 180 180">
              <G rotation={-90} originX="90" originY="90">
                <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#F1F6F9"
                  fill="transparent"
                  strokeWidth="25"
                />
                <Circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#CC222F"
                  fill="transparent"
                  strokeWidth="25"
                  strokeDasharray={circleCircumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </G>
            </Svg>
            <View style={styles.graphTextWrapperLeft}>
              <Text style={styles.text}>70%</Text>
              <Text style={styles.atRiskText}>At Risk</Text>
            </View>
            <View style={styles.summaryContainer}>
            <View style={styles.summaryItem}>
              <View style={styles.indicator} />
              <Text style={styles.summaryText}>Total Projected: 70%</Text>
            </View>
            <Text style={styles.summaryTextB}>Total Attended: 35%</Text>
          </View>
          </View>
          <View style={styles.newClass}>
            <Text style={styles.class}>Next Class</Text>
            <Text style={styles.nextClass}>{nextClass.subject}</Text>
            <Text style={styles.nextClass}>{nextClass.time}</Text>
            <Text style={styles.nextClass}>{nextClass.room}</Text>
          </View>

          <Text style={styles.weeklySummary}>Weekly Attendance Summary</Text>
          <View style={styles.tableContainer}>
            {/* Header Row */}
            <View style={[styles.row, styles.headerRow]}>
              <Text style={[styles.weekCell, styles.headerCell]}>Week length</Text>
              <Text style={[styles.statusCell, styles.headerCell]}>Attended hours</Text>
            </View>
            {/* Data Rows */}
            {weeklyAttendance.map((item) => (
              <View key={item.week} style={styles.row}>
                <Text style={styles.weekCell}>{item.week}</Text>
                <Text style={[styles.statusCell, item.status <= 10 && styles.redText]}>
                  {item.status}
                </Text>
              </View>
            ))}
          </View>
        </>
      )}

      {activeTab === "Grades" && (
        <>
          <Text style={styles.noGradesText}>No grades available</Text>
        </>
      )}
    </ScrollView>
  );
};
const sharedBackgroundColor = "#F6F6F6";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderRadius: 20, // Add border radius to the wrapper
    overflow: "hidden", // Clip the content to the rounded rectangle
    backgroundColor: sharedBackgroundColor,
    padding: 3,
  },
  sharedTabStyle: {
    backgroundColor: sharedBackgroundColor,
    borderColor: sharedBackgroundColor,
  },
  activeTab: {
    backgroundColor: sharedBackgroundColor,
    borderColor: sharedBackgroundColor,
  },
  tabButton: {
    width: "50%",
    paddingVertical: 8,
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  activeTab: {
    backgroundColor: "#24628F",
    borderColor: "#24628F",
  },
  inactiveTab: {
    backgroundColor: sharedBackgroundColor,
    borderColor: sharedBackgroundColor,
  },
  tabButtonText: {
    fontWeight: "bold",
    color: "#006FCF",
    marginRight: 5,
  },
  activeTabText: {
    color: "white",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 30,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  weekCell: {
    flex: 2,
  },
  statusCell: {
    flex: 1,
    textAlign: "right",
  },
  noGradesText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
  graphWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    color: "#394867",
  },
  graphWrapperLeft: {
    flexDirection: "row", // Align the graph and text in a row
    alignItems: "center", // Align items vertically in the row
  },
  graphTextWrapperLeft: {
    marginLeft: -100, // Add some space between graph and text
    alignItems: "center",
    justifyContent: "center",
  },
  atRiskText: {
    marginTop: 40,
    fontSize: 14,
    color: "#394867",
  },
  summaryItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  indicator: {
    width: 10,
    height: 10,
    backgroundColor: "#CC222F", // Red indicator color
    // borderRadius: 0,
    marginRight: 5,
  },
  summaryText: {
    fontSize: 14,
    color: "#394867",
  },
  summaryTextB: {
    fontSize: 14,
    color: "#394867",
    marginTop: 5
  },
  courseText: {
    fontWeight: "normal",
    fontSize: 18,
  },
  summaryContainer: {
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end", // Align to the right
    marginTop: 10,
    paddingLeft: 70
  },
  newClass: {
    marginTop: 30,
    marginBottom: 30,
    borderColor: "#006D04",
    borderWidth: 1,
    padding: 20,
    borderRadius: 15,
  },
  nextClass: {
    fontSize: 15,
    marginBottom: 5
  },
  class: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10
  },
  weeklySummary: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10
  },
  headerRow: {
    backgroundColor: "#f6f6f6",
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  headerCell: {
    fontWeight: "bold",
  },
  redText: {
    color: "#CC222F",
  },
});

export default AcademicsScreen;
