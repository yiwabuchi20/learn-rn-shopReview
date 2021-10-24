import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
/* types */
import { Shop } from "../types/shop";
import Stars from "./Stars";

const { width } = Dimensions.get("window");
const CONTAINER_WIDTH = width / 2;
const PADDING = 16;
const IMAGE_WIDTH = CONTAINER_WIDTH - PADDING * 2;

type Props = {
  shop: Shop;
  onPress: () => void;
};

export const ShopReviewItem: React.FC<Props> = ({ shop, onPress }: Props) => {
  const { name, place, score, imageUrl, description } = shop;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.placeText}>{place}</Text>
        <Stars score={score} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CONTAINER_WIDTH,
    padding: 16,
  },
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH * 0.7,
  },
  nameText: {
    fontSize: 16,
    color: "#000",
    marginTop: 8,
    fontWeight: "bold",
  },
  placeText: {
    fontSize: 12,
    color: "#999",
  },
});
