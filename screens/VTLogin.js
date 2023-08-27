import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Font from "expo-font";
import { ListItem, Icon } from "react-native-elements";
// import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import NeedHelp from "../components/NeedHelp";

const CustomText = (props) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "custom-font": require("../assets/fonts/Inter.ttf"),
      });

      setFontLoaded(true);
    }

    loadFont();
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Text style={{ ...props.style, fontFamily: "custom-font" }}>
      {props.children}
    </Text>
  );
};

export default VTLogin = ({ navigation }) => {
  const [website, setWebsite] = useState("");

  function handleConnectSite() {
    navigation.navigate("userLogin");
  }


  function websiteHandler(item) {
    setWebsite(item);
    console.log(website);
    // if (website === '1234') {
    //   console.log('tufufufufu');
    // }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/vettrak.png")} />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <Text style={styles.inputTitle}>Enter college website</Text>
        <TextInput
          style={styles.TextInput}
          placeholder="https://collegename.edu.au"
          placeholderTextColor="#989C9E"
          onChangeText={websiteHandler}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleConnectSite}>
        <Text style={styles.loginText}>Connect to site</Text>
      </TouchableOpacity>
      <NeedHelp />
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
  image: {
    marginBottom: 60,
    width: 300,
    resizeMode: "contain",
  },
  inputView: {
    backgroundColor: "#ededed",
    borderRadius: 0,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  inputTitle: {
    marginBottom: 10,
    fontSize: 16,
  },
  TextInput: {
    borderBottomColor: "#E3E4E5",
    borderBottomWidth: 1,
    padding: 1,
    fontSize: 16,
  },
  forgot_button: {
    height: 30,
    marginTop: 10,
    fontSize: 16,
    textDecorationLine: "underline",
    // color: "#24628F",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#CC222F",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputView: {
    width: "80%",
    marginBottom: 20,
  },
  helpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
  },
});
