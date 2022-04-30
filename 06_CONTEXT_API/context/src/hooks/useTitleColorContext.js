import { createContext, useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = createContext(TitleColorContext);

    if (!context) {
        console.log("Cotexto não encontrado!");
    }
    return context;
};
