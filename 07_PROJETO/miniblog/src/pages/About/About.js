/* Styles CSS */
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.about}>
            <h1>
                Sobre o Mini <span>BLOG</span>
            </h1>
            <p>Estudo sobre react frontend e backend no Firebase</p>
            <Link to='/posts/create' className='btn'>
                Criar post
            </Link>
        </div>
    );
};

export default About;
