import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import ForgotPassword from '../components/ForgottenPassword';

export default UserLogin = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signInHandler() {
    navigation.navigate("homeScreen");
  }

  function backToVetHandler() {
    navigation.navigate("vtLogin");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.backButton} onPress={backToVetHandler}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Log In</Text>
        </View> */}
      </View>
      <Image style={styles.image} source={require("../assets/logo.webp")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your username"
          placeholderTextColor="#989C9E"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter your password"
          placeholderTextColor="#989C9E"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      
      <TouchableOpacity style={styles.loginBtn} onPress={signInHandler}>
        <Text style={styles.loginText}>Sign in</Text>
      </TouchableOpacity>
     <ForgotPassword />

      <View style={styles.footer}>
        <Text style={styles.caption}>Powered by</Text>
        <Image style={styles.vettrak} source={require("../assets/vettrak.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    paddingTop: 50, // Adjust the top padding as needed
    marginBottom: 70,
  },
  backButton: {},
  backText: {
    fontSize: 18,
    color: "#24628F",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
  image: {
    marginBottom: 50,
  },
  inputView: {
    width: "80%",
    marginBottom: 20,
  },
  inputTitle: {
    marginBottom: 10,
    fontSize: 16,
  },
  TextInput: {
    borderBottomColor: '#E3E4E5',
    borderBottomWidth: 1, 
    padding: 1,
    fontSize: 16
  },
  forgot_button: {
    textDecorationLine: "underline",
    marginTop: 40,
    color: "#24628F",
    fontSize: 16
  },
  loginBtn: {
    width: "80%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20, 
    backgroundColor: "#24628F",
  },
  loginText: {
    color: "#fff",
    fontWeight: 'bold',
    fontSize: 16
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10
  },
  vettrak: {
    width: 100,
    width: 80,
    height: 30,
    resizeMode: 'contain'
  },
  caption: {
    color: "#6D7072",
  }
});
