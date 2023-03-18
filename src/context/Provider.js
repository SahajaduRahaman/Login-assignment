import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./Reducer";

const StateContext = createContext(null);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useData = () => useContext(StateContext);
