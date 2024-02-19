//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import InputField from "./InputField";

// create a component
const Bill = ({ navigation }) => {
  const [text, onChangeText] = React.useState("First Name");
  const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.bold}>Bill</Text>
          <InputField title="First Name"></InputField>
          <InputField title="Last Name"></InputField>
          <InputField title="Address"></InputField>
          <InputField title="City"></InputField>
          <InputField title="Country/Region"></InputField>
          <InputField title="State/Province"></InputField>
          <InputField title="Zip/Postal Code"></InputField>
          <InputField title="Phone Number"></InputField>
          <InputField title="Email"></InputField>
          <InputField title="Zip/Postal Code"></InputField>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("PaymentDetails");
            }}
          >
            <Text style={styles.btnFont}>Next</Text>
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
    // alignItems: "center",
    // backgroundColor: '#2c3e50',
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    padding: 10,
  },
  btn: {
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
    fontSize: 16
  },
});

//make this component available to the app
export default Bill;
