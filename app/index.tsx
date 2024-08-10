import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import styles from "@/src/styles/styles";
import ActionButton from "@/src/components/ActionButton";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (username && password) {
      const userData = { username, password };
      await AsyncStorage.setItem("@user_data", JSON.stringify(userData));
      router.push("/products");
    } else {
      Alert.alert("Error", "Please enter username and password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <ActionButton title="LOGIN" press={handleLogin} />
      <Text style={styles.authText}>
        Don't have an account?
        <Pressable onPress={() => router.push("/register")}>
          <Text style={styles.authButton}>Register</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default LoginScreen;
