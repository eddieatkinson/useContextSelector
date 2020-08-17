import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Store, { AppContext } from "./store";
import Test from "./Test";
import { useContextSelector } from "use-context-selector";
import TestParallel from "./TestParallel";

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
  // const array = useContextSelector(AppContext, (v) => v.array);
  return (
    <>
      <Test />
      <TestParallel />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
