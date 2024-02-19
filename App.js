import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Bill from "./components/Bill";
import PaymentDetails from "./components/PaymentDetails";
import ReviewOrder from "./components/ReviewOrder";
import OrderDone from "./components/OrderDone";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bill"
          component={Bill}
          options={{ title: "Bill Information" }}
        />
        <Stack.Screen
          name="PaymentDetails"
          component={PaymentDetails}
          options={{ title: "Payment Details" }}
        />
        <Stack.Screen
          name="ReviewOrder"
          component={ReviewOrder}
          options={{ title: "Review Order" }}
        />
        <Stack.Screen
          name="OrderDone"
          component={OrderDone}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
