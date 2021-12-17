import { StyleSheet, Text, View } from "react-native";

import COLORS from "./Constants/Colors";
import CategoriesScreen from "../pages/CategoriesScreen";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import PaginaInicio from "../pages/PaginaInicio";
import PaginaSecundaria from "../pages/PaginaSecundaria";
import React from "react";
import Register from "../pages/Register";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

export default function Navigator() {
  const user = useSelector((state) => state.auth.userId);
  const styleHeader = {
    headerStyle: {
      backgroundColor: COLORS.primary,
    },
    headerTintColor: "white",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  const Stack = createNativeStackNavigator();

  const CartStack = createNativeStackNavigator();
  const ShopStack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const AuthStack = createNativeStackNavigator();

  function AuthStackRender() {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name={"Register"} component={Register} />
      </AuthStack.Navigator>
    );
  }

  function ShopStackRender() {
    return (
      <ShopStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.primary,
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <ShopStack.Screen
          name={"Home"}
          component={CategoriesScreen}
          options={{ title: "Home" }}
        />
        <ShopStack.Screen
          name={"PaginaInicio"}
          component={PaginaInicio}
          options={({ route }) => ({ title: route.params?.name })}
        />
        <ShopStack.Screen
          name={"Detail"}
          component={PaginaSecundaria}
          options={({ route }) => ({ title: route.params?.bread.name })}
        />
      </ShopStack.Navigator>
    );
  }

  function CartStackRender() {
    return (
      <CartStack.Navigator screenOptions={styleHeader}>
        <CartStack.Screen name={"Cart"} component={PaginaSecundaria} />
      </CartStack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: style.tabBar,
          }}
        >
          <Tab.Screen
            name={"Shop"}
            component={ShopStackRender}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={style.item}>
                  <Ionicons
                    name={"md-home"}
                    size={24}
                    color={focused ? "green" : "black"}
                  />
                  <Text>Home</Text>
                </View>
              ),
            }}
          />
          <Tab.Screen
            name={"Cart"}
            component={CartStackRender}
            options={{
              tabBarIcon: ({ focused }) => (
                <View style={style.item}>
                  <Ionicons
                    name={"md-cart"}
                    size={24}
                    color={focused ? "green" : "black"}
                  />
                  <Text>Carrito</Text>
                </View>
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        AuthStackRender()
      )}
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
