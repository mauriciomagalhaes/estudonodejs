/* Styles CSS*/
import styles from "./Home.module.css";

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

/* Component */
import PostDetail from "../../components/PostDetail";

const handleSubmit = (e) => {
    e.preventDefault();
};

const Home = () => {
    const [query, setQuery] = useState("");
    const { documents: posts, loading } = useFetchDocuments("posts");

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
                {loading && <p>Carregando ...</p>}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>Nenhum post encontrado</p>
                        <Link to='/post/create' className='btn'>
                            Criar primeiro post
                        </Link>
                    </div>
                )}
                {posts &&
                    posts.map((post) => (
                        <PostDetail key={post.id} post={post} />
                    ))}
            </div>
        </div>
    );
};

export default Home;
