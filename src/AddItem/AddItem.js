import { Button, StyleSheet, TextInput, View } from "react-native";

import React from "react";

export default function AddItem(props) {
  const { setTextInput, onAdd } = props;

  return (
    <View style={styles.containerInput}>
      <TextInput
        placeholder="Receta a cosultar"
        onChangeText={(text) => setTextInput(text)}
        style={styles.input}
      />
      <Button title="Add" onPress={() => onAdd()} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
    marginTop: "3%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "grey",
    borderBottomWidth: 5,
    width: "70%",
  },
});
