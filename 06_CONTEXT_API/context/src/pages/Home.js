import ChangeCounter from "../components/ChangeCounter";
//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";

/* Hook */
import { useCounterContext } from "../hooks/useCounterContext";
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
    //const { Counter } = useContext(CounterContext);

    const { Counter } = useCounterContext();

    const { color, dispatch } = useTitleColorContext();

    return (
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {Counter}</p>
            <ChangeCounter />
            <div>
                <button onClick={() => dispatch({ type: "RED" })}>
                    Vermelho
                </button>
                <button onClick={() => dispatch({ type: "BLUE" })}>Azul</button>
            </div>
        </div>
    );
};

export default Home;
