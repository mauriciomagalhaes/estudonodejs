import "./App.css";

import { useState, useEffect } from "react";

//Custom Hook
import { useFetch } from "./hooks/useFetch";

function App() {
  const [products, setProducts] = useState([]);

  const { data } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const url = "http://localhost:3000/products";

  //  useEffect(() => {
  //    async function fetchData() {
  //      const res = await fetch(url);
  //      const data = await res.json();
  //      setProducts(data);
  //    }
  //    fetchData();
  //  }, []);

  //Adição produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = { name, price };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(product),
    });

    //Carregamento dinamico
    const addProduct = await res.json();
    //console.log(addProduct);
    setProducts((prevProduct) => [...prevProduct, addProduct]);

    //Clean fields
    setName("");
    setPrice("");
  };

  return (
    <div className='App'>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type='number'
              name='price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <input type='submit' value='Criar' />
        </form>
      </div>
    </div>
  );
}

export default App;
