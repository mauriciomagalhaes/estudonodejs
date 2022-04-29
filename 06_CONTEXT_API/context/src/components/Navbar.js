import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <NavLink to={"/home"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/about"}>About</NavLink>
        </div>
    );
};

export default Navbar;
