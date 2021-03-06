import styles from "./Register.module.css";

/* Hooks */
import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/useAuthentication";

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const { createUser, error: authError, loading } = useAuthentication();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = { displayName, email, password };

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
            return;
        }

        await createUser(user);
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.register}>
            <h1>Cadastre-se</h1>
            <p>Criação de usuário</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type='text'
                        name='name'
                        placeholder='Digite seu nome'
                        required
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input
                        type='email'
                        name='email'
                        placeholder='Digite seu e-mail'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </label>
                <label>
                    <span>Password:</span>
                    <input
                        type='password'
                        name='password'
                        placeholder='Digite seu passoword'
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>
                <label>
                    <span>Confirmar:</span>
                    <input
                        type='password'
                        name='confirmPassword'
                        placeholder='Confirme seu password'
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                    />
                </label>

                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && (
                    <button className='btn' disable>
                        Aguarde...
                    </button>
                )}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    );
};

export default Register;
