import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
/* components */
import { ShopReviewItem } from "../components/ShopReviewItem";
/* lib */
import { getShops } from "../lib/firebase";
/* types */
import { Shop } from "../types/shop";

type Props = NativeStackScreenProps<HomeStackParamList, "Home">;

export const HomeScreen = ({ navigation }: Props) => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    shops && setShops(shops);
  };

  const onPressShop = () => {
    navigation.navigate("Shop");
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} onPress={onPressShop} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
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
