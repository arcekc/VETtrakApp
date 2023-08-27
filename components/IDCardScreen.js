import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const IDCardScreen = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        {/* School Name and Logo */}
        <View style={styles.schoolHeader}>
          <Image
            source={require("../assets/koi.png")} // Replace with your school logo image
            style={styles.schoolLogo}
          />
        </View>

        {/* Student Information */}
        <View style={styles.studentInfo}>
          <View style={styles.leftInfo}>
            <Text style={styles.studentName}>KC Marie Arce</Text>
            <Text style={styles.title}>Student ID:</Text>
            <Text style={styles.subtitle}>12200387</Text>
            <Text style={styles.title}>Date of Birth:</Text>
            <Text style={styles.subtitle}>01/01/2000</Text>
            <Text style={styles.title}>Course:</Text>
            <Text style={styles.subtitle}>
              ICT50220 Diploma of Information Technology
            </Text>
          </View>
          <View style={styles.rightInfo}>
            <View style={styles.photoContainer}>
              <Image
                source={require("../assets/images/kc.png")} // Replace with student's photo
                style={styles.photo}
              />
            </View>
            <Text style={styles.studentLabel}>STUDENT</Text>
            <View style={styles.expiration}>
              <Text style={styles.expTitle}>Expiration</Text>
              <Text style={styles.expDate}>01/05/2024</Text>
            </View>
          </View>
        </View>

        {/* Barcode */}
        <View style={styles.barcode}>
          <Image
            source={require("../assets/qr-code.png")} // Replace with your barcode image
            style={styles.barcodeImage}
          />
         <Text style={styles.barcodeText}>
            Date: {currentDateTime.toLocaleString()}
          </Text>
        </View>
        {/* <Image
    source={require("../assets/tick.png")} // Replace with the tick image source
    style={styles.tickImage}
  /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  card: {
    width: "90%",
    backgroundColor: "#F4FAFF",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  schoolHeader: {
    alignItems: "center",
    marginBottom: 5,
  },
  schoolLogo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  schoolName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  leftInfo: {
    flex: 1,
    marginRight: 10,
  },
  studentInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start", // Align items at the top
    marginBottom: 20,
    paddingVertical: 20, // Adjust padding for consistency
    backgroundColor: "#24628F",
    width: "107%",
    paddingLeft: 20,
  },
  rightInfo: {
    flex: 1,
    alignItems: "center",
  },
  photoContainer: {
    alignItems: "center",
  },
  photo: {
    width: 120,
    height: 150, // Keeping it square
    // borderRadius: 60,
    // marginBottom: 10,
  },
  studentLabel: {
    fontSize: 14,
    color: "#000",
    width: 120,
    backgroundColor: "#fff",
    textAlign: "center",
    fontWeight: "600",
    padding: 4,
  },
  studentName: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
    fontWeight: "500",
    marginBottom: 20,
  },
  className: {
    fontSize: 14,
    color: "#fff",
  },
  barcode: {
    alignItems: "center",
  },
  barcodeImage: {
    width: 150,
    height: 150,
    marginBottom: 5,
  },
  barcodeText: {
    fontSize: 12,
    color: "#666",
  },
  expiration: {
    backgroundColor: "#F4FAFF",
    paddingHorizontal: 10, // Add padding for spacing
    borderLeftWidth: 2, // Add left border
    borderColor: "black", // Border color
    width: 120,
    paddingTop: 10,
    paddingBottom: 10
  },
  expTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 5,
  },
  expDate: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default IDCardScreen;
