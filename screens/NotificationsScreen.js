import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const notification = [
  {
    id: 1,
    // sender: 'KOI Student Services',
    subject: "Details updated",
    message:
      "This is to confirm that you have recently updated your contact details.",
    read: true,
    date: "01/08/2023",
  },
  {
    id: 2,
    // sender: 'KOI Student Services',
    subject: "Password changed",
    message: "Your password has been successfully updated.",
    read: true,
    date: "01/08/2023",
  },
  // Add more dummy notification here
];

const NotificationsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation

  const handleItemClick = (notification) => {
    navigation.navigate("NotificationDetailScreen", { notification });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemClick(item)}>
      <ListItem bottomDivider style={{ backgroundColor: "#FBFBFB" }}>
        <Icon
          name={item.read ? "circle" : "circle-outline"}
          type="material-community"
          color={item.read ? "#CC222F" : "#CC222F"}
          size={15}
          marginBottom={50}
        />
        <ListItem.Content>
          <ListItem.Subtitle style={{ color: 'black', fontWeight: "bold", marginBottom: 10 }}>
            {item.subject}
          </ListItem.Subtitle>
          {/* <ListItem.Subtitle>{item.sender}</ListItem.Subtitle> */}
          <ListItem.Subtitle style={styles.message}>
            {item.message.length > 50
              ? item.message.slice(0, 50) + "..."
              : item.message}
          </ListItem.Subtitle>
        </ListItem.Content>
        <View style={styles.rightContent}>
          <Text style={styles.dateText}>{item.date}</Text>
          <View style={styles.iconsContainer}>
            {item.attachment && (
              <Icon name="attachment" type="entypo" size={15} color="gray" />
            )}
            <Icon name="chevron-right" type="material-community" color="gray" />
          </View>
        </View>
      </ListItem>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>My Inbox</Text> */}
      <FlatList
        data={notification}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  message: {
    color: "#676262",
    paddingTop: 5,
  },
  dateText: {
    marginBottom: 30,
    color: "#676262",
  },
  rightContent: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  iconsContainer: {
    flexDirection: "row", // Align icons in a row
    alignItems: "center", // Center them vertically
  },
});

export default NotificationsScreen;
