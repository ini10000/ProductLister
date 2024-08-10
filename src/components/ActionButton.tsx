import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../styles/styles";

interface ButtonProps {
  title: string;
  press: () => void;
}
const ActionButton: React.FC<ButtonProps> = ({ title, press }) => {
  return (
    <Pressable style={styles.button} onPress={press}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default ActionButton;
