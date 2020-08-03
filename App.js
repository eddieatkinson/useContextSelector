import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Store, { AppContext } from "./store";
import Test from "./Test";

export default function App() {
  return (
    <Store>
      <App1 />
    </Store>
  );
}

const App1 = () => {
  console.log("rendering");
  const { array } = useContext(AppContext);
  return <Test />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
