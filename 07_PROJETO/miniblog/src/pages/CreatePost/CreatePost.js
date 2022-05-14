import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const { user } = useAuthValue();

    //tags.split(",").map((tag) => tag.trim());

    const handleSubmit = (e) => {
        e.preventDefault();

        const tagsArray = tags
            .split(",")
            .map((tag) => tag.trim().toLowerCase());

        const post = {
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        };
        console.log(post);
    };

    return (
        <div className={styles.create_post}>
            <h2>Create Post</h2>
            <p>Escreva sobreo que quiser e compartilhe o seu conhecimento</p>
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
                        placeholder='Digite o conteúdo do post'
                        required
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
                <button className='btn'>Cadastrar</button>
                {/*                 {!loading && <button className='btn'>Cadastrar</button>}
                {loading && (
                    <button className='btn' disable>
                        Aguarde...
                    </button>
                )}
                {error && <p className='error'>{error}</p>} */}
            </form>
        </div>
    );
};

export default CreatePost;
