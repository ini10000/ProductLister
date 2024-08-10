import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import Loader from "@/src/components/Loader";
import styles from "@/src/styles/styles";
import { fetchProducts } from "@/src/api/products";
import { Product } from "@/src/components/ProductCard";

const ProductDetailsScreen = () => {
  const [product, setProduct] = useState<any>(null); // Replace `any` with your product type
  const [favorite, setFavorite] = useState<boolean>(false);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const loadProduct = async () => {
      const products = await fetchProducts();
      const selectedProduct = products.find(
        (p: Product) => p.id === Number(id)
      );
      setProduct(selectedProduct);
    };
    loadProduct();
  }, [id]);

  const handleAddToFavorites = async () => {
    const favorites = JSON.parse(
      (await AsyncStorage.getItem("@favorites")) || "[]"
    );
    if (!favorites.some((fav: any) => fav.id === product.id)) {
      favorites.push(product);
      await AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
      setFavorite(true);
    }
  };

  if (!product) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Pressable style={styles.button} onPress={handleAddToFavorites}>
        <Text style={styles.buttonText}>
          {favorite ? "ADDED TO FAVOURITES" : "ADD TO FAVOURITES"}
        </Text>
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;
