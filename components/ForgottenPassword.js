import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {Icon } from "react-native-elements";

const ForgotPassword = () => {
  const navigation = useNavigation();

  function handleForgotPassword() {
    // navigation.navigate("HelpScreen"); 
  }
  return (
    <TouchableOpacity onPress={handleForgotPassword}>
      <View style={styles.passwordContainer}>
        <Icon name="lock-reset" type="material-community" color="" size={20} />
        <Text style={styles.forgot_button}>Forgotten your username or password?</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ForgotPassword;
const styles = StyleSheet.create({
    passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  forgot_button: {
    height: 30,
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: "underline",
    // color: "#24628F",
  },
});
