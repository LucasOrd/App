import React, { useState } from "react";
import { Button, View, Text, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const ImageSelector = () => {
  conts[(urlImage, setUrlImage)] = useState("");

  const verifyPermissions = () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permisos induficientes");
      return false;
    }
    return true;
  };

  const handlerTakePhoto = () => {
    const camaraLista = await verifyPermissions();

    if (!camaraLista) return;
    const image = await ImagePicker.launchCameraAsync({
      quality: 0.5,
    });
    setUrlImage(image.url);
  };
  return (
    <View>
      <View style={style.container}>
        {urlImage ? (
          <Image source={{ url: urlImage }} style={style.image} />
        ) : (
          <Text>No hay imagen</Text>
        )}
      </View>
      <Button title={"tomar foto"} onPress={handlerTakePhoto} />
    </View>
  );
};

export default ImageSelector;

const style = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: black,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
