import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {Icon } from "react-native-elements";

const NeedHelp = () => {
  const navigation = useNavigation();

  function handleNeedHelp() {
    navigation.navigate("HelpScreen"); // Navigate to the HelpScreen
  }
  return (
    <TouchableOpacity onPress={handleNeedHelp}>
      <View style={styles.helpContainer}>
        <Icon name="lifebuoy" type="material-community" color="" size={20} />
        <Text style={styles.forgot_button}>Need help?</Text>
      </View>
    </TouchableOpacity>
    
  );
};

export default NeedHelp;
const styles = StyleSheet.create({
  helpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },
  forgot_button: {
    height: 30,
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: "underline",
    // color: "#24628F",
  },
});
