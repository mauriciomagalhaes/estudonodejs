import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <h1>Principal</h1>
            <Navbar />
        </div>
    );
}

export default App;
