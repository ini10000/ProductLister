import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useRouter } from "expo-router";
import { fetchProducts } from "@/src/api/products";
import ProductCard, { Product } from "@/src/components/ProductCard";
import Loader from "@/src/components/Loader";

const ProductListingScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setLoading(false);
    };
    loadProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <FlatList
      style={{ marginTop: 10 }}
      data={products}
      keyExtractor={(item: Product) => item.id.toString()}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => router.push(`/product-details?id=${item.id}`)}
        >
          <ProductCard product={item} />
        </Pressable>
      )}
    />
  );
};

export default ProductListingScreen;
