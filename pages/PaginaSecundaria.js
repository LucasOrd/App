import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function PaginaSecundaria() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Button
        title={"Volver al inicio"}
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
      <Text>Receta 1</Text>
      <Text>Receta 2</Text>
      <Text>Receta 3</Text>
      <Text>Receta 4</Text>
      <Text>Receta 5</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
