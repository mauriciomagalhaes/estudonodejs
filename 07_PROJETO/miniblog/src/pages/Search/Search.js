import styles from "./Search.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import PostDetail from "../../components/PostDetail";
import { Link } from "react-router-dom";

const Search = () => {
    const query = useQuery();
    const search = query.get("q");

    const { documents: posts } = useFetchDocuments("posts", search);

    return (
        <div className={styles.search_container}>
            <h2>Search</h2>
            <p> Procurado por: {search}</p>
            {posts && posts.length === 0 && (
                <>
                    <p>Não foram encontrado posts a partir da sua busca</p>
                    <Link to='/' className='btn btn-dark'>
                        Voltar
                    </Link>
                </>
            )}
            {posts &&
                posts.map((post) => <PostDetail key={post.id} post={post} />)}
        </div>
    );
};

export default Search;
