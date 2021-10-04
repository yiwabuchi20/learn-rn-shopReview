import * as firebase from "firebase";
import "firebase/firestore";

import { Shop } from "../types/shop";

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

export const getShops = async () => {
  const snapshot = await firebase.firestore().collection("shops").get();
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};
