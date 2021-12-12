import { StyleSheet, View } from "react-native";

import { Header } from "./src/Header/Header";
import Navigator from "./src/Navigator";
import React from "react";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title={"Smart Easy Food"} />
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
