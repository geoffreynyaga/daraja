import React, { Component } from "react";
import HomeScreen from "./components/HomeScreen";


class MyFirstExpoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          borderWidth: 4,
          borderColor: "red",
          marginTop: 20,
          flexDirection: "column",
        }}
      >
        <HomeScreen />
      </View>
    );
  }
}

export default MyFirstExpoApp;
