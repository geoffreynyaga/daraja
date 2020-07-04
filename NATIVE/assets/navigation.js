/*
 * File: c:\Projects\MFUKO\src\NATIVE\navigation\MainTabNavigator.js
 * Project: MFUKO
 * Author: geoff  at geoffrey@mfuko.co.ke
 * -----
 * Last Modified: Saturday July 4th 2020 9:50:54 pm
 * Modified By:  Geoffrey Nyaga Kinyua ( <geoffrey@mfuko.co.ke> )
 * -----
 * This file should not be copied and/or distributed without the express
 * permission of MFUKO PAYMENTS SERVICES Ltd.
 *
 * Copyright (c) 2019 MFUKO PAYMENTS SERVICES Ltd.
 * -----
 * HISTORY:
 */

import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { createStackNavigator } from "react-navigation-stack";

function PublicTabBarIcon({ focussed }) {
  return (
    <TabBarIcon
      focused={focussed}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focussed ? "" : "-outline"}`
          : "ios-people"
      }
    />
  );
}

PublicGroupsStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {
    tabBarLabel: "Public",
    header: null,
    tabBarIcon: PublicTabBarIcon,
  };

  if (routeName === "PaybillDetail") {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

const MpesaStack = createStackNavigator({
  Public: PublicMainComponent,
  Mpesa: MpesaMainScreen,
  Paybill: PaybillScreen,
  Till: TillScreen,
  SkumaBill: SkumaBillScreen,

  PaybillDetail: {
    screen: PaybillDetailScreen,
    navigationOptions: { tabBarVisible: false },
  },

  PaybillCreate: PaybillCreateScreen,
});

const ContactsStack = createStackNavigator({
  Contacts: VerifiedContactsScreen,
});

function ContactsTabBarIcon({ focussed }) {
  return (
    <TabBarIcon
      focused={focussed}
      name={
        Platform.OS === "ios"
          ? `ios-options${focussed ? "" : "-outline"}`
          : "ios-contacts"
      }
    />
  );
}

ContactsTabBarIcon.propTypes = {
  focussed: PropTypes.bool.isRequired,
};

ContactsStack.navigationOptions = {
  tabBarLabel: "Contacts",
  tabBarIcon: ContactsTabBarIcon,
};

function MyStackTabBarIcon({ focussed }) {
  return (
    <TabBarIcon
      focused={focussed}
      name={
        Platform.OS === "ios"
          ? `ios-options${focussed ? "" : "-outline"}`
          : "ios-contacts"
      }
    />
  );
}

MyStackTabBarIcon.propTypes = {
  focussed: PropTypes.bool.isRequired,
};

MyStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {
    tabBarLabel: "Test",
    tabBarIcon: MyStackTabBarIcon,
  };

  if (routeName === "Blank") {
    navigationOptions.tabBarVisible = false;
  }

  return navigationOptions;
};

export default createBottomTabNavigator({
  // MyStack,
  HomeStack,
  PublicGroupsStack,
  // MpesaStack,
  NotificationsStack,
  ContactsStack,
});
