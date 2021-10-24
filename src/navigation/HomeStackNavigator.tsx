import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
/* screens */
import { HomeScreen } from "../screens/HomeScreen";
import { ShopScreen } from "../screens/ShopScreen";
/* types */
import {RootStackParamList} from "../types/navigation"

const Stack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};
