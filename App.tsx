import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import { StyleSheet, Text, View } from "react-native";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBwcHYhTu40WE3NmzRJ_O-BGKBVlRGcBx0",
    authDomain: "shop-review-1e536.firebaseapp.com",
    projectId: "shop-review-1e536",
    storageBucket: "shop-review-1e536.appspot.com",
    messagingSenderId: "224747186382",
    appId: "1:224747186382:web:9702e353c22d0fbe65489f",
    measurementId: "G-WV4ZTTK5CZ",
  };

  firebase.initializeApp(firebaseConfig);
}

type Shop = {
  name: string;
  place: string;
};

export default function App() {
  const [shops, setShops] = useState<Shop[]>([]);

  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shops").get();
    const shops = snapshot.docs.map((doc) => doc.data() as Shop);
    setShops(shops);
    console.log(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));

  return <View style={styles.container}>{shopItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
