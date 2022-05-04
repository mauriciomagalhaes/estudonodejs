import styles from "./Login.module.css";

/* Hooks */
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

/* Modules */
import { Link } from "react-router-dom";

const Login = () => {
    const { login, error: loginError, loading } = useAuthentication();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    //setError("");

    const user = { email, password };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(user);
    };

    useEffect(() => {
        if (loginError) {
            setError(loginError);
        }
    }, [loginError]);

    return (
        <div className={styles.login}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                {error && <p className='error'>{error}</p>}
            </form>

            <p>Para cadastrar</p>
            <span>
                <Link to='/register'>Click aqui</Link>
            </span>
        </div>
    );
};

export default Login;
