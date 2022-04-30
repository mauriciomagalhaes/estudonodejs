import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/about"}>About</NavLink>
        </div>
    );
};

export default Navbar;
