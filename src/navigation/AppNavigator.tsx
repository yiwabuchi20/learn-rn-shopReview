import { NavigationContainer } from "@react-navigation/native";
import React from "react";
/* navigator */
import { HomeStackNavigator } from "./HomeStackNavigator";

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};
