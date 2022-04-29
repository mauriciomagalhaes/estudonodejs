/* Hooks */
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

/* Styles */
import "./Product.css";

/* Link */
import { Link } from "react-router-dom";

const Product = () => {
    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id;

    const { data: product, loading, error } = useFetch(url);

    return (
        <>
            <p>Id do produto {id}</p>
            {error && <p>{error}</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>R$:{product.price}</p>
                    <Link to={"/"}>Voltar</Link>
                    <Link to={`/product/${product.id}/info`}>+Detalhes</Link>
                </div>
            )}
        </>
    );
};

export default Product;
