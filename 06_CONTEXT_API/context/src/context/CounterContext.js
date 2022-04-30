/* Context */
import { createContext, useState } from "react";

export const CounterContext = createContext();

/* Provider */
export const CounterContextProvider = ({ children }) => {
    const [Counter, setCounter] = useState();

    return (
        <CounterContext.Provider value={{ Counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};
