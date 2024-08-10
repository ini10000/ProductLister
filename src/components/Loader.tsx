import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "../styles/styles";

const Loader = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default Loader;
