import styles from "./EditPost.module.css";

/* Hooks */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
/* Contexts */
import { useAuthValue } from "../../context/AuthContext";

const EditPost = () => {
    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const { user } = useAuthValue();

    const navigate = useNavigate();

    const { document: post, loading, error } = useFetchDocument("posts", id);
    const { updateDocument, response } = useUpdateDocument("posts");

    //console.log(post);
    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setImage(post.image);
            setBody(post.body);

            const textTags = post.tags.join(", ");
            setTags(textTags);
        }
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        // Validate url
        try {
            new URL(image);
        } catch (error) {
            setFormError("A imagem precisa ser uma URL.");
        }

        // Create array tags
        const tagsArray = tags
            .split(",")
            .map((tag) => tag.trim().toLowerCase());

        const data = {
            title,
            image,
            body,
            tags: tags.split(",").map((tag) => tag.trim()),
        };

        // check values
        if (!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os campos!");
        }
        updateDocument(id, data);
        //if (formError) return;
        // Redirect to home
        navigate("/");
    };

    return (
        <div className={styles.edit_post}>
            <h2>Editar Post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>T??tulo:</span>
                    <input
                        type='text'
                        name='title'
                        required
                        placeholder='Digite o t??tulo do seu post'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input
                        type='text'
                        name='imagem'
                        required
                        placeholder='Digite a url da foto do seu post'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </label>
                <p className={styles.preview_title}>Preview da imagem atual:</p>
                <img className={styles.image_preview} src={image} alt={title} />
                <label>
                    <span>Conte??do:</span>
                    <textarea
                        name='body'
                        required
                        placeholder='Digite o conte??do do post'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type='text'
                        name='tags'
                        required
                        placeholder='Insira as tags do seu post separadas por v??gulas'
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </label>

                {!response.loading && (
                    <button className='btn'>Editar post!</button>
                )}
                {response.loading && (
                    <button className='btn' disable>
                        Aguarde...
                    </button>
                )}
                {(response.error || formError) && (
                    <p className='error'>{response.error || formError}</p>
                )}
            </form>
        </div>
    );
};

export default EditPost;
