import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NotificationDetailScreen = ({ route }) => {
  const { notification } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.subject}>{notification.subject}</Text>
      <Text style={styles.message}>{notification.message}</Text>
      {/* Display other details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  subject: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  message: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  // Add more styles for other details if needed
});

export default NotificationDetailScreen;
