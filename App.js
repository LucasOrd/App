import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { Header } from "./src/Header/Header";
import { PaginaInicio } from "./pages/PaginaInicio";
import { PaginaSecundaria } from "./pages/PaginaSecundaria";

export default function App() {
  const [userReceta, SetUserReceta] = useState();

  const handlerStart = (selectedReceta) => {
    SetUserReceta(selectedReceta);
  };

  let content = <PaginaInicio onStartReceta={handlerStart} />;

  if (userReceta) {
    content = <PaginaSecundaria />;
  }

  return (
    <View style={styles.container}>
      <Header title={"Smart Easy Food"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
