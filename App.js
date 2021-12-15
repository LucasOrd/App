import { StyleSheet, View } from "react-native";

import { Header } from "./src/Header/Header";
import Navigator from "./src/Navigator";
import { Provider } from "react-redux";
import React from "react";
import store from "./src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header title={"Smart Easy Food"} />
        <Navigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
