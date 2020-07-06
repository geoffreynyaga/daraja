//components
import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";

import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomeScreen from "../components/HomeScreen";

export function WishListScreen() {
  return (
    <View>
      <Text> I am Now in WishList Screen</Text>
    </View>
  );
}

export function CartScreen() {
  return (
    <View>
      <Text> Cart Screen</Text>
    </View>
  );
}

export function ProfileScreen() {
  return (
    <View>
      <Text> Profile Screen</Text>
    </View>
  );
}

// stacks

export const HomeStack = createStackNavigator({
  Home1: HomeScreen,
  Cart2: {
    screen: CartScreen,
    tabBarVisible: false,
  },
});

// tab navigator

export const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Cart: CartScreen,
  Wishlist: WishListScreen,
  You: ProfileScreen,
});

// export AppContainer

export default createAppContainer(TabNavigator);
