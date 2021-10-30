import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppNavigator } from "./src/navigation/AppNavigator";
import { MainTabNavigator } from "./src/navigation/MainTabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
