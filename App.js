import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Store, { AppContext } from "./store";
import Test from "./Test";
import { useContextSelector } from "use-context-selector";
import TestParallel from "./TestParallel";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import RootReducer from "./redux/reducers/RootReducer";

const theStore = applyMiddleware(reduxPromise)(createStore)(RootReducer);

export default function App() {
  return (
    <Provider store={theStore}>
      {/* <Store> */}
      <App1 />
      {/* </Store> */}
    </Provider>
  );
}

const App1 = () => {
  console.log("rendering");
  // const { array } = useContext(AppContext);
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
