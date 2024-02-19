import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Item() {
  return (
    <View style={styles.card}>
      <Image
        style={styles.img}
        source={{
          uri: "https://image.uniqlo.com/UQ/ST3/my/imagesgoods/470993/item/mygoods_08_470993.jpg?width=750",
        }}
      />
      <View style={styles.row}>
        <Text>Item</Text>
        <Text style={styles.bold}>Miracle Air Shirt Jacket (Wool Like)</Text>
      </View>
      <View style={styles.row}>
        <Text>Quantity</Text>
        <Text style={styles.bold}>2</Text>
      </View>
      <View style={styles.row}>
        <Text>Price</Text>
        <Text style={styles.bold}>$100</Text>
      </View>
      <Text style={styles.bold}>Total $200</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    alignItems: "center",
  },
  img: {
    width: "100%",
    height: 200,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 15,
  },
});
