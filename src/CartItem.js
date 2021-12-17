import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Item } from "./Item/Item";
import React from "react";
import { removeItem } from "../store/actions/CartActions";
import { useDispatch } from "react-redux";

const CartItemProps = () => {
  ItemCart: Item;
};

export const CartItem = (props) => {
  const dispatch = useDispatch();

  const handlerDeleteItemCar = () => dispatch(removeItem(props.ItemCart.id));

  return (
    <View style={style.container}>
      <View style={{ flex: 9 }}>
        <Text style={style.title}>{props.ItemCart.name}</Text>
        <Text>Cantidad {props.ItemCart.quanty}</Text>
        <Text>{props.ItemCart.weight}</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Ionicons
          name={"trash"}
          size={24}
          color={"#d2d2d2"}
          onPress={handlerDeleteItemCar}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  title: {
    fontFamily: "OpenSansBold",
    fontSize: 16,
  },
});
