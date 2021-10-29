import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CreateReviewScreen } from "../screens/CreateReviewScreen";
/* screens */
import { HomeScreen } from "../screens/HomeScreen";
import { ShopScreen } from "../screens/ShopScreen";
/* types */
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTintColor: "#000" }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Shop" component={ShopScreen} />
    </Stack.Navigator>
  );
};

export const HomeStackNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainStack}
        options={{ headerShown: false }}
      />
      <RootStack.Screen name="CreateReview" component={CreateReviewScreen} />
    </RootStack.Navigator>
  );
};
