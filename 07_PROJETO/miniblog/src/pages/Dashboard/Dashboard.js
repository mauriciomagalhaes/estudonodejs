import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

//Context
import { useAuthValue } from "../../context/AuthContext";
//Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Dashboard = () => {
    const { user } = useAuthValue();
    const uid = user.uid;

    const { documents: posts } = useFetchDocuments("posts", null, uid);
    const { deleteDocument } = useDeleteDocument("posts");

    //console.log(posts);
    return (
        <div className={styles.dashboard}>
            <h2>Dashboard</h2>
            <p>Gerencie seus posts</p>
            {posts && posts.length === 0 ? (
                <div className={styles.noposts}>
                    <p>Nenhum post encontrado</p>
                    <Link to='/posts/create' className='btn'>
                        Criar primeiro Post
                    </Link>
                </div>
            ) : (
                <div className={styles.post_header}>
                    <span>Título</span>
                    <span>Ações</span>
                </div>
            )}
            {posts &&
                posts.map((post) => (
                    <div className={styles.post_row} key={post.id}>
                        <p>{post.title}</p>
                        <div className={styles.actions}>
                            <Link
                                to={`/post/${post.id}`}
                                className='btn btn-outline'
                            >
                                Ver
                            </Link>{" "}
                            <Link
                                to={`/post/edit/${post.id}`}
                                className='btn btn-outline'
                            >
                                Editar
                            </Link>
                            <button
                                onClick={() => deleteDocument(post.id)}
                                className='btn btn-outline btn-danger'
                            >
                                Excluir
                            </button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Dashboard;
