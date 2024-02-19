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
const ReviewOrder = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text>ReviewOrder</Text>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("OrderDone");
            }}
          >
            <Text style={styles.btnFont}>Pay</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    flex: 1,
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
  btn: {
    backgroundColor: "#00a8cc",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: "60%",
    alignItems: "center",
  },
  btnFont: {
    color: "white",
  },
});

//make this component available to the app
export default ReviewOrder;
