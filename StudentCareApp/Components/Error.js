import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const Error = ({ text }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="information-circle" size={20} color="#000000" />
      <Text variant="bodyMedium" style={styles.indicator}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 380,
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    gap: 5,
    backgroundColor: "rgba(112, 17, 109, 0.25)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 20,
  },
  indicator: { color: "#000000", fontWeight: "bold" },
});

export default Error;