import React from "react";
import { AuthScreen } from "../screens/AuthScreen";
import { MainTabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  const user = null;
  return <>{!user ? <AuthScreen /> : <MainTabNavigator />}</>;
};
