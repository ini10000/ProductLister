import styles from "@/src/styles/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Stack, useRouter } from "expo-router";
import { Pressable, Text, Touchable } from "react-native";

export default function RootLayout() {
  const router = useRouter();

  const handleLogout = async () => {
    await AsyncStorage.multiRemove(["@user_data", "@favorites"]);
    router.push("/");
  };

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="register" />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Products",
          headerRight: () => (
            <Pressable onPress={handleLogout}>
              <Text style={styles.redText}>LOGOUT</Text>
            </Pressable>
          ),
        }}
        name="products"
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: "Product Details" }}
        name="product-details"
      />
    </Stack>
  );
}
