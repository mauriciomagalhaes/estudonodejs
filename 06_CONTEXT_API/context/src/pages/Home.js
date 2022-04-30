import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
    const { Counter } = useContext(CounterContext);

    return (
        <div>
            <h1>Home</h1>
            <p>Valor do contador: {Counter}</p>
        </div>
    );
};

export default Home;
