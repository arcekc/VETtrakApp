import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Icon } from "react-native-elements";
import Collapsible from "react-native-collapsible";

const FAQs = [
  {
    question: "How can i find my site?",
    answer: "Having trouble finding your site? Here's a simple guide to help you locate your VETtrak Student Portal using the URL address:\n\n1. Open a web browser and visit your VETtrak site login page.\n2. Look at the top of the page in the address bar; you'll see the URL address of your VETtrak site (e.g., \"collegename.edu.au\").\n3.Copy the URL, excluding \"/login\" and anything that comes after it.\n4.Now, paste the URL into the \"Enter college website\" field within the app.\n5.Tap on \"Connect to site\" to proceed.\nYou can now log in to your site using your username and password.\n\nIf searching by URL address still doesn't help you find the VETtrak Student Portal website, we recommend getting in touch with the designated person responsible for VETtrak in your school or learning organization. They are best equipped to assist you in locating the portal and resolving any issues you may encounter.\n",
  },
  {
    question: "I can’t find my site by URL address.",
    answer: "If you're unable to find the VETtrak Student Portal website by searching its URL address, we recommend reaching out to the designated person responsible for VETtrak in your school or learning organization. They will be best equipped to assist you in locating the portal and resolving any issues you may encounter.",
  },
  {
    question: "I can’t log in.",
    answer: "If you have problems logging in, try again later or contact your school or learning provider.",
  },
];

const HelpScreen = () => {
  const [activeSection, setActiveSection] = useState(null);

  HelpScreen.navigationOptions = {
    headerTitle: () => (
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', flex: 1 }}>
        <Icon name="lifebuoy" type="material-community" color="black" size={20} style={{ alignSelf: 'flex-start', marginTop: 2 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', alignSelf: 'flex-start', marginLeft: 8 }}>Help</Text>
      </View>
    ),
  };

  const toggleSection = (index) => {
    if (activeSection === index) {
      setActiveSection(null);
    } else {
      setActiveSection(index);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.faqContainer}>
        {FAQs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
             
            <Text style={styles.faqQuestion} onPress={() => toggleSection(index)}>
              {faq.question} {" "}
              <Icon
                name={activeSection === index ? "chevron-down" : "chevron-right"}
                type="material-community"
                color="black"
                size={20}
              />
            </Text>
            <Collapsible collapsed={activeSection !== index}>
              <Text style={styles.faqAnswer}>{faq.answer}</Text>
              {index === 0 && <Image source={require('../assets/faq-1.png')} style={styles.faqImage} />}
            </Collapsible>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    backgroundColor: "#fff"
  },
  faqContainer: {
    marginBottom: 16,
  },
  faqItem: {
    marginBottom: 16,
  },
  faqQuestion: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
});

export default HelpScreen;