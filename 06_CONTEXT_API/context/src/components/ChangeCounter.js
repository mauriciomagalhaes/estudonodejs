import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
    const { Counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => setCounter(Counter + 1)}>
                Adicionar valor p/ contar
            </button>
        </div>
    );
};

export default ChangeCounter;
