import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "../src/CartItem";
import React from "react";
import { confirmCart } from "../store/actions/CartActions";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handlerConfirmCart = () => dispatch(confirmCart(cart, total));
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={cart}
        renderItem={({ item }) => {
          return <CartItem ItemCart={item} />;
        }}
      />
      <View style={style.comfirm}>
        <TouchableOpacity
          style={{ flex: 1, marginLeft: 10 }}
          onPress={handlerConfirmCart}
        >
          <Text>Confirmar</Text>
        </TouchableOpacity>
        <Text style={style.total}>Total: ${total}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  comfirm: {
    backgroundColor: "#d3d3d3",
    flexDirection: "row",
    marginBottom: 150,
    height: 60,
    marginHorizontal: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  total: {
    fontFamily: "OpenSansBold",
    flex: 1,
    textAlign: "right",
    marginRight: 10,
  },
});

export default CartScreen;
