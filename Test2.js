import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { AppContext } from "./store";
import { useContextSelector } from "use-context-selector";

export default function Test2() {
  const { number, setNumber } = useContext(AppContext);
  // const number = useContextSelector(AppContext, (v) => v.number);
  // const setNumber = useContextSelector(AppContext, (v) => v.setNumber);
  useEffect(() => {
    setTimeout(() => {
      console.log("SETTING NUMBER IN test2");
      setNumber(10000);
    }, 1000);
  }, []);
  console.log("rendering test2");
  return <Text>{number}</Text>;
}
