import ChangeCounter from "../components/ChangeCounter";
//import { useContext } from "react";
//import { CounterContext } from "../context/CounterContext";

/* hOOK */
import { useCounterContext } from "../hooks/useCounterContext";

const Home = () => {
    //const { Counter } = useContext(CounterContext);

    const { Counter } = useCounterContext();

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {Counter}</p>
            <ChangeCounter />
        </div>
    );
};

export default Home;
