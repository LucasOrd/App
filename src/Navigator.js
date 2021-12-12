import { NavigationContainer } from "@react-navigation/native";
import PaginaInicio from "../pages/PaginaInicio";
import PaginaSecundaria from "../pages/PaginaSecundaria";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function Navigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={"Home"} component={PaginaInicio} />
        <Stack.Screen name={"Secundaria"} component={PaginaSecundaria} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
