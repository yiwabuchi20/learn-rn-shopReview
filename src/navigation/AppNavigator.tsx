import React from "react";
import { AuthScreen } from "../screens/AuthScreen";
import { MainTabNavigator } from "./MainTabNavigator";

export const AppNavigator = () => {
  const user = {id:1111};
  return <>{!user ? <AuthScreen /> : <MainTabNavigator />}</>;
};
