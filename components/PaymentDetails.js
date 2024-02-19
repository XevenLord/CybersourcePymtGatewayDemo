//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import RadioButton from "./RadioButton";
import InputField from "./InputField";
import SelectDropdown from "react-native-select-dropdown";

// create a component
const PaymentDetails = ({ navigation }) => {
  const [selected, setSelected] = React.useState("");
  const radioBtnsData = ["Visa", "MasterCard", "JCB"];
  const month = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const year = new Date().getFullYear();
  const years = Array.from(new Array(30), (val, index) => index + year);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text>Card Type</Text>
          {radioBtnsData.map((data, key) => {
            return (
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
                onPress={() => {
                  setSelected(data);
                }}
              >
                <RadioButton selected={selected == data}></RadioButton>
                <Text>{data}</Text>
              </TouchableOpacity>
            );
          })}
          <InputField title="Card Number" />
          <Text>Expiration Month</Text>
          <SelectDropdown
            data={month}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <Text>Expiration Year</Text>
          <SelectDropdown
            data={years}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.navigate("ReviewOrder");
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
    width: "50%",
    alignItems: "center",
  },
  btnFont: {
    color: "white",
  },
});

//make this component available to the app
export default PaymentDetails;
