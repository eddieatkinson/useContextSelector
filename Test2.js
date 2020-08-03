import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { AppContext } from "./store";
import { useContextSelector } from "use-context-selector";

export default function Test() {
  // const { number, setNumber } = useContext(AppContext);
  const number = useContextSelector(AppContext, (v) => v.number);
  const setNumber = useContextSelector(AppContext, (v) => v.setNumber);
  useEffect(() => {
    setTimeout(() => {
      setNumber(10000);
    }, 1000);
  }, []);
  console.log("rendering test1");
  return <Text>{number}</Text>;
}
