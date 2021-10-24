import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Shop">;
  route: RouteProp<RootStackParamList, "Shop">;
};

export const ShopScreen = ({ navigation, route }: Props) => {
  const { shop } = route.params;
  console.log(shop);

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Shop Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
});
