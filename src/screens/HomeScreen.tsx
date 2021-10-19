import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
/* components */
import { ShopReviewItem } from "../components/ShopReviewItem";
/* lib */
import { getShops } from "../lib/firebase";
/* types */
import { Shop } from "../types/shop";

export const HomeScreen = () => {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const shops = await getShops();
    shops && setShops(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <ShopReviewItem key={index.toString()} shop={shop} />
  ));

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} />
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
