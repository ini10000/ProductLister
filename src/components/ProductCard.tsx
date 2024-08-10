import React from "react";
import { View, Text, Image, ImageSourcePropType } from "react-native";
import styles from "../styles/styles";

export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.thumbnail }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{product.title}</Text>
        <Text style={styles.cardPrice}>${product.price}</Text>
      </View>
    </View>
  );
};

export default ProductCard;
