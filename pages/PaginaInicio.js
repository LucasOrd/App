import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AddItem from "../src/AddItem/AddItem";
import ListItem from "../src/ListItem/ListItem";
import ModalQuestion from "../src/Modal/Modal";

export const PaginaInicio = (props) => {
  const [list, setList] = useState([]);

  const [textInput, setTextInput] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  const [itemSelected, setItemSelected] = useState({});

  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedReceta, setSelectedReceta] = useState("");

  const handlerInputReceta = (text) => {
    setEnteredValue(text);
  };

  const handlerConfirmInput = () => {
    setConfirmed(true);
    setSelectedReceta(enteredValue);
    setEnteredValue("");
  };

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
        title="buscar receta"
        onPress={() => props.onStartReceta(selectedReceta)}
      />
    );
  }

  return (
    <View style={styles.screen}>
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
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});
