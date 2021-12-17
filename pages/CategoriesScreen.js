import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import GridItem from "../src/GridItem";
import React from "react";
import { selectCategory } from "../src/Store/Actions/CategoryActions";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = () => {
  const categories = useSelector((state) => state.categories.categories);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handlerSelectedCategory = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("PaginaInicio", {
      name: item.title,
    });
  };
  return (
    <View style={style.container}>
      <FlatList
        numColumns={2}
        data={categories}
        renderItem={({ item }) => {
          return (
            <GridItem
              item={item}
              onSelected={() => handlerSelectedCategory(item)}
            />
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default CategoriesScreen;
