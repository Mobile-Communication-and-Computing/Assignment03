import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Profile from "./Profile";
import Course from "./Course";
import Subjects from "./Subjects";

export default function BottomTab({ route }) {
  const { user } = route.params || {};

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused ? "person-circle" : "person-circle-outline";
          } else if (route.name === "Course") {
            iconName = focused ? "book" : "book-outline";
          } else if (route.name === "Subjects") {
            iconName = focused ? "list" : "list-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#4A148C",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Profile" initialParams={{ user }} component={Profile} options={{headerShown: false}}/>
      <Tab.Screen name="Course" initialParams={{ user }} component={Course} options={{headerShown: false}}/>
      <Tab.Screen name="Subjects" initialParams={{ user }} component={Subjects} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}
