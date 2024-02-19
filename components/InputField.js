//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

// create a component
const InputField = ({
  title = "Input field",
  input = "",
  keyboardType = 'default',
  dataDetectorType = "none",
  inputMode = "text",
}) => {
  const [text, onChangeText] = React.useState(input);

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType={keyboardType}
        dataDetectorTypes={dataDetectorType}
        inputMode={inputMode}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignContent: "flex-start",
    alignSelf: "flex-start",
  },
  input: {
    height: 40,
    // margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "gray",
    padding: 10,
  },
});

//make this component available to the app
export default InputField;
