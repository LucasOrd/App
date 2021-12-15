import React from "react";

export const Register = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Registro</Text>
        <TextInput></TextInput>
        <TextInput></TextInput>
        <TouchableOpacity>
          <Text>Registrarme</Text>
        </TouchableOpacity>
        <Text>¿Ya tenes cuenta?</Text>
        <Button title={"Ingresar"} onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d2d2d2",
    justifyContent: "center",
  },
  card: {
    width: "80%",
    backgroundColor: "white",
    justifyContent: "center",
  },
});
