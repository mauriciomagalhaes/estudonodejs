import styles from "./CreatePost.module.css";

/* Hooks */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInsertDocument } from "../../hooks/useInsertDocument";

/* Contexts */
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const { user } = useAuthValue();

    const navigate = useNavigate();

    const { insertDocument, response } = useInsertDocument("posts");

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

        // check values
        if (!title || !image || !tags || !body) {
            setFormError("Por favor, preencha todos os campos!");
        }

        const post = {
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        };
        //console.log("Page", post);

        if (formError) return;

        insertDocument({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        });

        // Redirect to home
        navigate("/");
    };

    return (
        <div className={styles.create_post}>
            <h2>Create Post</h2>
            <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input
                        type='text'
                        name='title'
                        required
                        placeholder='Digite o título do seu post'
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
                <label>
                    <span>Conteúdo:</span>
                    <textarea
                        name='body'
                        required
                        placeholder='Digite o conteúdo do post'
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
                        placeholder='Insira as tags do seu post separadas por vígulas'
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </label>

                {!response.loading && (
                    <button className='btn'>Criar post!</button>
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

export default CreatePost;
