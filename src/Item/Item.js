import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const Item = ({ aux, onSelected }) => {
  return (
    <TouchableOpacity onPress={() => onSelected(aux)}>
      <View style={styles.Item}>
        <Text style={styles.title}>{aux.name}</Text>
      </View>
      <View>
        <Text style={styles.details}>${aux.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Item: {
    padding: 20,
    margin: 10,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
  title: {
    fontSize: 20,
    fontFamily: "Helvetica",
  },
  datails: {
    fontSize: 18,
  },
});
