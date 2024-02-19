//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Item from "./Item";

// create a component
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Item></Item>
        <Image
          style={styles.logo}
          source={{
            uri: "https://genset.com.my/wp-content/uploads/visa-mastercard-logo.png",
          }}
        ></Image>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.6}
          onPress={() => {navigation.navigate('Bill')}}
        >
          <Text style={styles.btnText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  btnText: {
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  logo: {
    // width: '100%',
    height: 40,
    resizeMode: "contain",
    marginBottom: 12,
  },
});

//make this component available to the app
export default Home;
