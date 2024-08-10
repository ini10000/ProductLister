import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import styles from "@/src/styles/styles";
import ActionButton from "@/src/components/ActionButton";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
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
      <Text style={styles.title}>REGISTER</Text>
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
      <ActionButton title="REGISTER" press={handleRegister} />
      <Text style={styles.authText}>
        Already have an account?
        <Pressable onPress={() => router.push("/")}>
          <Text style={styles.authButton}>Login</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default RegisterScreen;
