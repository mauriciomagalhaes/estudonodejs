import styles from "./Login.module.css";

/* Modules */
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={styles.login}>
            <h2>Login</h2>
            <form>
                <label>
                    <span>E-mail:</span>
                    <input
                        type='email'
                        name='email'
                        placeholder='Digite seu e-mail'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type='password'
                        name='password'
                        placeholder='Digite sua senha'
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <button className='btn'>Entrar</button>
            </form>

            <p>Para cadastrar</p>
            <span>
                <Link to='/register'>Click aqui</Link>
            </span>
        </div>
    );
};

export default Login;
