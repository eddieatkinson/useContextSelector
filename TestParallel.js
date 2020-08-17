import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { AppContext } from "./store";
import { useContextSelector } from "use-context-selector";

export default function TestParallel() {
  const { number, setNumber } = useContext(AppContext);
  // const number = useContextSelector(AppContext, (v) => v.number);
  // const setNumber = useContextSelector(AppContext, (v) => v.setNumber);
  useEffect(() => {
    setTimeout(() => {
      console.log("SETTING NUMBER IN test parallel");
      setNumber(120000);
    }, 2000);
  }, []);
  console.log("rendering test parallel");
  return <Text>{number}</Text>;
}
