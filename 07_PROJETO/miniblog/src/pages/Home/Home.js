/* Styles CSS*/
import styles from "./Home.module.css";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const handleSubmit = (e) => {
    e.preventDefault();
};

const Home = () => {
    const [query, setQuery] = useState("");
    const [posts] = useState([]);

    return (
        <div className={styles.home}>
            <h1>Veja os nosso posts mais recentes</h1>
            <form onSubmit={handleSubmit} className={styles.search_form}>
                <input
                    type='text'
                    placeholder='Ou busque por tags...'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type='submit' className='btn btn-dark'>
                    Pesquisar
                </button>
            </form>
            <div>
                <h1>Posts...</h1>
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Nenhum post encontrado</p>
                        <Link to='/post/create' className='btn'>
                            Criar primeiro post
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
