import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Animated } from "react-native";

const SplashScreen = ({ navigation }) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.spring(logoScale, {
      toValue: 1,
      friction: 2,
      tension: 20,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, [logoOpacity, logoScale, navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../assets/vettrak.png")}
        style={[
          styles.logo,
          {
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 200, 
    height: 200, 
    resizeMode: "contain", 
  },
});

export default SplashScreen;
