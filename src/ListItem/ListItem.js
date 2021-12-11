import { Button, FlatList, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function ListItem(props) {
  const { list, onHandlerModal } = props;

  return (
    <>
      {list.length > 0 ? (
        <FlatList
          data={list}
          renderItem={(data) => (
            <View style={styles.containerItem}>
              <Text
                style={[
                  styles.textItem,
                  {
                    fontStyle: data.item.state == true ? "italic" : "normal",
                    textDecorationLine:
                      data.item.state == true ? "line-through" : "none",
                  },
                ]}
              >
                {data.item.value}
              </Text>
              <Button
                onPress={() => onHandlerModal(data.item)}
                title="Borrar"
                className="btn btn-primary"
              />
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text> No hay busquedas de recetas </Text>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: "3%",
  },
  textItem: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
});
