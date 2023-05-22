import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Bubble = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ACBCFF",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
    color: "#000000",
  },
});

export default Bubble;
