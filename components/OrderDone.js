//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

// create a component
const OrderDone = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.bold}>Thank you for your order!</Text>
        <View style={styles.row}>
          <Text>Order Number:</Text>
          <Text>123456789</Text>
        </View>
        <View style={styles.row}>
          <Text>Total Amount:</Text>
          <Text>$100</Text>
        </View>
        <TouchableOpacity
          style={styles.homeBtn}
          onPress={() => {
            navigation.replace("Home");
          }}
        >
          <Text style={styles.btnFont}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    margin: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 10,
  },
  homeBtn: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  btnFont: {
    color: "white",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

//make this component available to the app
export default OrderDone;
