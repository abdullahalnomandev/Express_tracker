import React, { createContext, useContext, useReducer } from "react";
import contextReducer from "./contextReducer";

const initialState = [];

export const ExpressTrackerContext = createContext(initialState);
export const Provider = ({ children }) => {
  const [transition, dispatch] = useReducer(contextReducer, initialState);
  console.log(transition);
  //Action Creators
  const deleteTransition = (id) =>
    dispatch({ type: "DELETE_TRANSITION", payLoad: id });
  const addTransition = (transition) => {
    dispatch({ type: "ADD_TRANSITION", payLoad: transition });
  };

  return (
    <ExpressTrackerContext.Provider
      value={{ transition, deleteTransition, addTransition }}
    >
      {children}
    </ExpressTrackerContext.Provider>
  );
};

export const useContextProvider = () => useContext(ExpressTrackerContext);
