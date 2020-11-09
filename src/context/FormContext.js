import React, { createContext, useReducer, useEffect } from "react";
import { InfoReducer } from "../reducers/InfoReducers";

export const FormContext = createContext();

const FormContextProvider = (props) => {
  const [info, dispatch] = useReducer(InfoReducer, [], () => {
    const localData = localStorage.getItem("infos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("infos", JSON.stringify(info));
  }, [info]);

  return (
    <FormContext.Provider value={{ info, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
