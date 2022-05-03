import { NavLink } from "react-router-dom";

/* Style CSS */
import styles from "./Navbar.module.css";

/* Hooks */
import { useAuthentication } from "../hooks/useAuthentication";

/* Context */
import { useAuthValue } from "../context/AuthContext";

const Navbar = () => {
    const { user } = useAuthValue();

    return (
        <nav className={styles.navbar}>
            <NavLink to={"/"} className={styles.brand}>
                Mini <span>Blog</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Home
                    </NavLink>
                </li>
                {!user && (
                    <>
                        <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Entrar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/register'
                                className={({ isActive }) =>
                                    isActive ? styles.active : ""
                                }
                            >
                                Cadastrar
                            </NavLink>
                        </li>
                    </>
                )}

                <li>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            isActive ? styles.active : ""
                        }
                    >
                        Sobre
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
