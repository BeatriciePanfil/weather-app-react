import { createContext, useState, useContext } from "react";

const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState("C");

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
  };

  const convertTemp = (celsiusTemp) => {
    if (unit === "F") {
      return Math.round((celsiusTemp * 9) / 5 + 32);
    }
    return celsiusTemp;
  };
  return (
    <UnitContext.Provider value={{ unit, toggleUnit, convertTemp }}>
      {children}
    </UnitContext.Provider>
  );
};
export const useUnit = () => useContext(UnitContext);
