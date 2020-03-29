import React, { Component } from "react";
import { View, Text, TouchableOpacity  } from "react-native";

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
          flexDirection: "column"
        }}
      >
        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            borderColor: "black",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <View
            style={{
              borderWidth: 1,
              borderColor: "green",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
              height: 50 + "%",
              backgroundColor: "#D2EA9B"
            }}
          >
            <Text>I</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: "green",
              flex: 9,
              marginHorizontal: 10,
              height: 50 + "%",
              flexDirection: "row",

              justifyContent: "flex-start",
              alignItems: "center",
              paddingLeft: 10
            }}
          >
            <Text>Search Products</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1.5,
            // borderWidth: 1,
            borderColor: "black",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <View
            style={{
              width: 20 + "%",
              height: 70 + "%",
              borderWidth: 1,
              marginRight: 20,
              borderRadius: 15,
              backgroundColor: "#E5F1DB",
              flexDirection: "column"
            }}
          >
            <View
              style={{
                height: 85 + "%",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "red"
              }}
            >
              <Text>IC </Text>
            </View>
            <View
              style={{
                height: 15 + "%",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "red"
              }}
            >
              <Text>Groceries</Text>
            </View>
          </View>
          <View
            style={{
              width: 20 + "%",
              height: 70 + "%",
              borderWidth: 1,
              marginRight: 20,
              borderRadius: 15,
              backgroundColor: "#FEF6E1"
            }}
          >
            <View
              style={{
                height: 85 + "%",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "red"
              }}
            >
              <Text>IC </Text>
            </View>
            <View
              style={{
                height: 15 + "%",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "red"
              }}
            >
              <Text>Repairs</Text>
            </View>
          </View>
          <View
            style={{
              width: 20 + "%",
              height: 70 + "%",
              borderWidth: 1,
              marginRight: 20,
              borderRadius: 15,
              backgroundColor: "#F0E9E4"
            }}
          >
            <View
              style={{
                height: 85 + "%",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "red"
              }}
            >
              <Text>IC </Text>
            </View>
            <View
              style={{
                height: 15 + "%",
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                borderColor: "red"
              }}
            >
              <Text style={{ fontSize: 8 }}>Gas Deliveries</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 3.5,
            borderWidth: 1,
            borderColor: "black",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderBottomColor: "blue",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: 100 + "%"
            }}
          >
            <TouchableOpacity style={{ backgroundColor: "#FC5455" }}>
              <Text style={{ color: "white" }}>NEW PRODUCTS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ color: "#FC5455" }}>See All.</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 9,
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                flexDirection: "column",
                height: 80 + "%",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 10,
                paddingRight: 10,
                marginRight: 10
              }}
            >
              <View
                style={{
                  flex: 1,
                  // borderWidth: 1,
                  justifyContent: "flex-end",
                  flexDirection: "row"
                }}
              >
                <View style={{ width: 20 + "%", alignSelf: "flex-end" }}>
                  <Text>love</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 4,
                  borderWidth: 1,
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: 80 + "%"
                }}
              >
                <Text>Image</Text>
              </View>
              <View
                style={{
                  flex: 3,
                  // borderWidth: 1,
                  justifyContent: "flex-start",
                  flexDirection: "column",
                  alignSelf: "flex-start"
                }}
              >
                <Text>Ksh. 20</Text>
                <Text style={{ fontWeight: "bold" }}>Kienyeji Mangoes</Text>
                <Text>3</Text>
              </View>
              <View
                style={{
                  flex: 2,
                  // borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  width: 100 + "%",
                  backgroundColor: "#FCBF00",
                  marginTop: 5
                }}
              >
                <Text>Add to Cart</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                flexDirection: "column",
                height: 80 + "%"
              }}
            >
              <Text>Box 2</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 4, borderWidth: 1, borderColor: "black" }}>
          <Text>Box 4</Text>
        </View>
      </View>
    );
  }
}

export default MyFirstExpoApp;
