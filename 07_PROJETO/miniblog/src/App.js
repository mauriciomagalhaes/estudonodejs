import "./App.css";

import { BrowserRouter, Routes, Route, Navgate } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <div className='container'>
                    <Routes></Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
