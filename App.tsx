import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, SafeAreaView } from "react-native";
/* components */
import { ShopReviewItem } from "./src/components/ShopReviewItem";
/* lib */
import { getShops } from "./src/lib/firebase";
/* types */
import { Shop } from "./src/types/shop";

export default function App() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
