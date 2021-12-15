import { Button, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import AddItem from "../src/AddItem/AddItem";
import Item from "../src/Item/Item";
import ListItem from "../src/ListItem/ListItem";
import ModalQuestion from "../src/Modal/Modal";
import PaginaSecundaria from "./PaginaSecundaria";
import { useNavigation } from "@react-navigation/native";

export default function PaginaInicio() {
  const navigation = useNavigation();

  const [list, setList] = useState([]);

  const [textInput, setTextInput] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState({});

  const [confirmed, setConfirmed] = useState(false);
  const [selectedReceta, setSelectedReceta] = useState("");

  const onAdd = () => {
    setList([
      ...list,
      {
        id: Math.floor(Math.random() * 100) + 1,
        value: textInput,
        state: false,
      },
    ]);
  };

  const onHandlerModal = (item) => {
    setItemSelected(item);
    setModalVisible(true);
  };
  const onDelete = (id) => {
    setList(list.filter((item) => item.id != id));
    setModalVisible(false);
  };

  let confirmedOuput = false;
  if (confirmed) {
    confirmedOuput = (
      <Button
        title="Agregar receta"
        onPress={() => props.onStartReceta(selectedReceta)}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Button
        title={"Ver todas las recetas"}
        onPress={() => {
          navigation.navigate("Detail");
        }}
      />
      <ModalQuestion
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onDelete={onDelete}
        itemSelected={itemSelected}
      />
      <AddItem setTextInput={setTextInput} onAdd={onAdd} />
      <ListItem list={list} onHandlerModal={onHandlerModal} />
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
