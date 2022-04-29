/* Styles */
import "./App.css";

/* Modules */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";

/* Components */
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";

/* Apps */
function App() {
  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* Rota dinâmica */}
          <Route path='/product/:id' element={<Product />} />
          <Route path='/product/:id/info' element={<Info />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
