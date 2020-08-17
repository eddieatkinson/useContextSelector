import React, { useState, useEffect, createContext } from "react";
// import { createContext } from "use-context-selector";

export const AppContext = createContext();

function Store({ children }) {
  console.log("STORE");
  const [array, setArray] = useState([]);
  const [number, setNumber] = useState(6);
  useEffect(() => {
    const newArray = [1, 2, 3];
    setArray(newArray);
  }, []);
  useEffect(() => {
    const newNumber = 99;
    setNumber(newNumber);
  }, [array]);
  return (
    <AppContext.Provider value={{ array, setArray, number, setNumber }}>
      {children}
    </AppContext.Provider>
  );
}

export default Store;
