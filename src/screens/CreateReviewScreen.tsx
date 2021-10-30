import { RouteProp } from "@react-navigation/native";
/* types */
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useLayoutEffect } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
/* components */
import { FloatingActionButton } from "../components/FloatingActionButton";
import { IconButton } from "../components/IconButton";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "CreateReview">;
  route: RouteProp<RootStackParamList, "CreateReview">;
};

export const CreateReviewScreen: React.FC<Props> = ({
  navigation,
  route,
}: Props) => {
  const { shop } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => {
        return (
          <IconButton
            name="x"
            onPress={() => {
              navigation.goBack();
            }}
          />
        );
      },
    });
  }, [shop]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: shop.name,
      headerLeft: () => (
        <FloatingActionButton onPress={() => navigation.goBack()} name="x" />
      ),
    });
  }, [navigation, shop]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>New Review Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
