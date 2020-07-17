import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Icon, Image } from "react-native-elements";

export default function HomeScreen(props) {
  return (
    <View
      style={{
        flex: 1,
        // borderWidth: 4,
        // borderColor: "red",
        marginTop: 0,
        flexDirection: "column",
      }}
    >
      {/* Search Row */}
      <View
        style={{
          flex: 1,
          // borderWidth: 1,
          borderColor: "black",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
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
            backgroundColor: "#D2EA9B",
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
            paddingLeft: 10,
            backgroundColor: "#FFFFFF",
          }}
        >
          <Text>Search Products</Text>
        </View>
      </View>

      {/* Categories Row */}
      <View
        style={{
          flex: 1.5,
          // borderWidth: 1,
          // borderColor: "black",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {/* Groceries Category */}
        <View
          style={{
            width: 20 + "%",
            height: 85 + "%",
            // borderWidth: 1,
            // borderColor: "blue",
            marginRight: 20,
            marginLeft: 10,
            borderRadius: 10,
            backgroundColor: "#E6F2DC",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              height: 75 + "%",
              // borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              // borderColor: "red",
            }}
          >
            <Icon
              name="leaf-maple"
              type="material-community"
              color="#436B1C"
              size={40}
            />
          </View>
          <View
            style={{
              height: 25 + "%",
              // borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>Groceries</Text>
          </View>
        </View>

        {/* Repairs Category */}
        <View
          style={{
            width: 20 + "%",
            height: 85 + "%",
            // borderWidth: 1,
            // borderColor: "blue",
            marginRight: 20,
            marginLeft: 10,
            borderRadius: 10,
            backgroundColor: "#FEF6E1",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              height: 75 + "%",
              // borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              // borderColor: "red",
            }}
          >
            <Icon name="tools" type="entypo" color="#436B1C" size={32} />
          </View>
          <View
            style={{
              height: 25 + "%",
              // borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>Repairs</Text>
          </View>
        </View>

        {/* Gas Deliveries Category */}
        <View
          style={{
            width: 20 + "%",
            height: 85 + "%",
            // borderWidth: 1,
            // borderColor: "blue",
            marginRight: 20,
            marginLeft: 10,
            borderRadius: 10,
            backgroundColor: "#F0E9E4",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              height: 75 + "%",
              // borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              // borderColor: "red",
            }}
          >
            <Icon
              name="gas-cylinder"
              type="material-community"
              color="#436B1C"
              size={40}
            />
          </View>
          <View
            style={{
              height: 25 + "%",
              // borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "red",
              paddingBottom: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>Gas Deliveries</Text>
          </View>
        </View>
      </View>

      {/* New Products Row */}
      <View
        style={{
          flex: 4.5,
          // borderWidth: 1,
          borderColor: "black",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
        }}
      >
        {/*  Title Row */}

        <View
          style={{
            flex: 1,
            // borderWidth: 1,
            borderBottomColor: "blue",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 100 + "%",
          }}
        >
          <View
            style={{
              backgroundColor: "#FC5455",
              marginLeft: 10,
              paddingHorizontal: 5,
            }}
          >
            <Text style={{ color: "white" }}>NEW PRODUCTS</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#FC5455", marginRight: 10 }}>SEE ALL.</Text>
          </TouchableOpacity>
        </View>

        {/*  Products Row */}
        <View
          style={{
            flex: 9,
            // borderWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginHorizontal: 10,
          }}
        >
          {/* Kienyeji Mangoes Product  */}
          <View
            style={{
              flex: 1,
              // borderWidth: StyleSheet.hairlineWidth,
              flexDirection: "column",
              backgroundColor: "#FFFFFF",
              height: 90 + "%",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 10,
              // paddingRight: 10,
              marginRight: 10,
            }}
          >
            {/* Like Button Row  */}
            <View
              style={{
                flex: 1,
                position: "absolute",
                // borderWidth: 1,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                zIndex: 99,
              }}
            >
              <View
                style={{
                  // borderWidth: 1,
                  flex: 8,
                  alignSelf: "flex-end",
                  justifyContent: "flex-end",
                }}
              ></View>

              <View
                style={{
                  // borderWidth: 1,
                  flex: 2,
                  justifyContent: "flex-end",
                }}
              >
                <Icon name="heart" type="evilicon" color="grey" size={34} />
              </View>
            </View>
            {/* Product Image  */}
            <View
              style={{
                flex: 5,
                flexDirection: "column",
                // borderWidth: 1,
                // borderColor: "red",
                justifyContent: "center",
                alignItems: "center",
                width: 80 + "%",
              }}
            >
              {/* Image with custom placeholder content  */}
              <Image
                source={require("../assets/products/Kienyeji-Mangoes.png")}
                resizeMode="contain"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                containerStyle={{
                  // borderWidth: 1,
                  // borderColor: "blue",
                  alignSelf: "flex-start",
                  alignContent: "center",
                  justifyContent: "flex-start",
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>
            {/* Product name and cost */}
            <View
              style={{
                flex: 2.5,
                // borderWidth: 1,
                justifyContent: "flex-start",
                alignSelf: "flex-start",
                flexDirection: "column",
                marginTop: 5,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 14 }}>Ksh. 25</Text>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Kienyeji Mangoes
              </Text>
              <Text>3</Text>
            </View>

            {/* Add to Cart  */}
            <TouchableOpacity
              style={{
                flex: 1.5,
                flexDirection: "row",
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: 100 + "%",
                backgroundColor: "#FCBF00",
                marginTop: 5,
                marginRight: 0,
                paddingHorizontal: 0,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 18 }}>Add to Cart</Text>
            </TouchableOpacity>
          </View>

          {/* Dispenser Re-Fills Product  */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              flexDirection: "column",
              height: 90 + "%",
              alignItems: "center",
              justifyContent: "space-between",
              borderRadius: 10,
              // paddingRight: 10,
              marginRight: 10,
            }}
          >
            {/* Like Button Row  */}
            <View
              style={{
                flex: 1,
                position: "absolute",
                // borderWidth: 1,
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                zIndex: 99,
              }}
            >
              <View
                style={{
                  // borderWidth: 1,
                  flex: 8,
                  alignSelf: "flex-end",
                  justifyContent: "flex-end",
                }}
              ></View>

              <View
                style={{
                  // borderWidth: 1,
                  flex: 2,
                  justifyContent: "flex-end",
                }}
              >
                <Icon name="heart" type="evilicon" color="grey" size={34} />
              </View>
            </View>
            {/* Product Image  */}

            <View
              style={{
                flex: 5,
                flexDirection: "column",
                // borderWidth: 1,
                // borderColor: "red",
                justifyContent: "center",
                alignItems: "center",
                width: 80 + "%",
              }}
            >
              {/* Image with custom placeholder content  */}
              <Image
                source={require("../assets/products/water-dispenser.png")}
                resizeMode="contain"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                containerStyle={{
                  // borderWidth: 1,
                  // borderColor: "blue",
                  alignSelf: "flex-start",
                  alignContent: "center",
                  justifyContent: "flex-start",
                }}
                PlaceholderContent={<ActivityIndicator />}
              />
            </View>

            {/* Product name and cost */}
            <View
              style={{
                flex: 2.5,
                // borderWidth: 1,
                justifyContent: "flex-start",
                alignSelf: "flex-start",
                flexDirection: "column",
                marginTop: 5,
                marginLeft: 10,
              }}
            >
              <Text style={{ fontSize: 14 }}>Ksh. 300</Text>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Dispenser Re-fills
              </Text>
              <Text>10 litres</Text>
            </View>

            {/* Add to Cart  */}
            <View
              style={{
                flex: 1.5,
                flexDirection: "row",
                // borderWidth: 1,
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "row",
                width: 100 + "%",
                backgroundColor: "#70BE0C",
                marginTop: 5,
                marginRight: 0,
                paddingHorizontal: 0,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <View>
                <Icon
                  raised
                  name="minus"
                  type="antdesign"
                  color="#436B1C"
                  size={14}
                />
              </View>
              <View>
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  01
                </Text>
              </View>
              <View>
                <Icon
                  raised
                  name="plus"
                  type="antdesign"
                  color="#436B1C"
                  size={14}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* DAILY NEEDS ROW */}

      <View
        style={{
          flex: 3,
          borderWidth: 1,
          borderColor: "black",
          flexDirection: "column",
          paddingRight: 10,
        }}
      >
        {/*  Title Row */}

        <View
          style={{
            // flex: 1,
            // borderWidth: 1,
            borderBottomColor: "blue",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: 100 + "%",
            marginVertical: 10,
          }}
        >
          <View
            style={{
              backgroundColor: "#034861",
              marginLeft: 10,
              padding: 5,
            }}
          >
            <Text style={{ color: "white" }}>Daily Needs</Text>
          </View>
          <TouchableOpacity>
            <Text style={{ color: "#FC5455", marginRight: 10 }}>SEE ALL.</Text>
          </TouchableOpacity>
        </View>

        {/* Cabbage Item  */}
        <View
          style={{
            width: 95 + "%",
            height: 70 + "%",
            flexDirection: "row",
            // borderWidth: StyleSheet.hairlineWidth,
            // borderColor: "orange",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 10,
            marginLeft: 10,
          }}
        >
          {/* Product Image  */}
          <View
            style={{
              // flex: 5,
              // flexDirection: "column",
              width: 25 + "%",
              height: 80 + "%",
              // borderWidth: 1,
              // borderColor: "red",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            {/* Image with custom placeholder content  */}
            <Image
              source={require("../assets/products/cabbage.png")}
              resizeMode="contain"
              style={{
                height: "100%",
                width: "100%",
              }}
              containerStyle={{
                // borderWidth: 1,
                // borderColor: "blue",
                alignSelf: "flex-start",
                alignContent: "center",
                justifyContent: "flex-start",
              }}
              PlaceholderContent={<ActivityIndicator />}
            />
          </View>

          {/* Product name and cost */}
          <View
            style={{
              // flex: 2.5,
              width: 50 + "%",
              height: 70 + "%",
              // borderWidth: 1,
              // borderColor: "brown",
              flexDirection: "column",
              justifyContent: "space-around",
              // alignSelf: "flex-start",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Ksh. 100</Text>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cabbage</Text>
            <Text>1kg</Text>
          </View>

          {/* Add to Cart  */}
          <View
            style={{
              // flex: 1.5,
              width: 25 + "%",

              flexDirection: "column",
              // borderWidth: 1,
              justifyContent: "space-around",
              alignItems: "center",
              height: 100 + "%",
              // marginTop: 5,
              marginRight: 0,
              paddingHorizontal: 0,
            }}
          >
            <View>
              <Icon name="heart" type="evilicon" color="grey" size={34} />
            </View>
            <View></View>
            <View>
              <Icon
                raised
                reverse
                name="plus"
                type="antdesign"
                color="#66B808"
                size={14}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false,
};
