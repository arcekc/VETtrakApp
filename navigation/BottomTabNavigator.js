import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // You can use any icon library you prefer
import HomeScreen from '../screens/HomeScreen';
import CommunicationScreen from '../screens/CommunicationScreen';
import AcademicsScreen from '../screens/AcademicsScreen';
import FinancesScreen from '../screens/FinancesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Communication') {
            iconName = 'message-text';
          } else if (route.name === 'Academics') {
            iconName = 'book';
          } else if (route.name === 'Finances') {
            iconName = 'wallet';
          } else if (route.name === 'Notifications') {
            iconName = 'bell';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Communication" component={CommunicationScreen} />
      <Tab.Screen name="Academics" component={AcademicsScreen} />
      <Tab.Screen name="Finances" component={FinancesScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
