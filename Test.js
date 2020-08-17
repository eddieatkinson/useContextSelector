import React, { useContext, useEffect } from "react";
import { Text, View } from "react-native";
import { AppContext } from "./store";

import Test2 from "./Test2";
import { useContextSelector } from "use-context-selector";

export default function Test() {
  const { array, setArray } = useContext(AppContext);
  // const array = useContextSelector(AppContext, (v) => v.array);
  // const setArray = useContextSelector(AppContext, (v) => v.setArray);
  useEffect(() => {
    console.log("SETTING ARRAY IN test");
    setArray([2, 4, 6]);
  }, []);
  console.log("rendering test");
  return (
    <>
      <View style={{ marginTop: 100 }} />
      {array.map((item, i) => {
        return <Text key={i}>{item}</Text>;
      })}
      <Test2 />
    </>
  );
}
