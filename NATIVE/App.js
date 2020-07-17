import React, { Component } from "react";
import { View } from "react-native";

import TabNavigator from "./navigation/mainTabNavigator";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          // borderWidth: 4,
          // borderColor: "red",
          marginTop: 10,
          flexDirection: "column",
        }}
      >
        <TabNavigator />
      </View>
    );
  }
}

export default App;
