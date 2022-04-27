import "./App.css";

import { useState } from "react";

//Custom Hook
import { useFetch } from "./hooks/useFetch";

function App() {
  //const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";

  const { data: item, httpConfig, loading } = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

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

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   body: JSON.stringify(product),
    // });

    // //Carregamento dinamico
    // const addProduct = await res.json();
    // //console.log(addProduct);
    // setProducts((prevProduct) => [...prevProduct, addProduct]);

    httpConfig(product, "POST");

    //Clean fields
    setName("");
    setPrice("");
  };

  return (
    <div className='App'>
      <h1>Lista de produtos</h1>

      {loading && <h1>Carregando...</h1>}

      {!loading && (
        <ul>
          {item &&
            item.map((product) => (
              <li key={product.id}>
                {product.name} - R$: {product.price}
              </li>
            ))}
        </ul>
      )}

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
          {loading && <input type='submit' disabled value='Criar' />}
          {!loading && <input type='submit' value='Criar' />}
        </form>
      </div>
    </div>
  );
}

export default App;
