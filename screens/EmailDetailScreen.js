import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";

const EmailDetailScreen = ({ route }) => {
  const { email } = route.params;

  const handleReply = () => {
    // Implement reply logic here
  };

  const handleForward = () => {
    // Implement forward logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.subject}>{email.subject}</Text>
        <Text style={styles.sender}>From: {email.sender}</Text>
        <Text style={styles.date}>
          {email.date}, {email.time}
        </Text>
      </View>
      <View style={styles.line}></View>
      <View style={styles.messageContainer}>
        <Text style={styles.message}>{email.message}</Text>
      </View>

      <View style={styles.line}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleReply}>
          <Text style={styles.buttons}>Reply</Text>
        </TouchableOpacity>
        <View style={styles.space}></View>
        <TouchableOpacity style={styles.button} onPress={handleForward}>
          <Text style={styles.buttons}>Forward</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageContainer: {
    padding: 25,
  },
  sender: {
    fontSize: 17,
    marginBottom: 5,
  },
  subject: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  message: {
    color: "black",
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 23,
  },
  buttonContainer: {
    flexDirection: "row", // Arrange buttons horizontally
    justifyContent: 'flex-start', // Add space between the buttons
    paddingHorizontal: 25, // Adjust horizontal spacing
    marginBottom: 20, // Adjust vertical spacing
    marginTop: 15
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 10, // Adjust button height
    paddingHorizontal: 20, // Adjust button width
    borderColor: "#016FD0",
    borderWidth: 1.5,
    borderRadius: 10,
    alignItems: "center",
  },
  date: {
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: "#E3E4E5",
    width: "100%",
    alignSelf: "center",
    marginVertical: 10,
  },
  space: {
    width: 10,
  },
  buttons: {
    color: "#006FCF",
    fontSize: 15,
    fontWeight: '600'
  }
});

export default EmailDetailScreen;
