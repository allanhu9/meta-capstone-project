import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="/#About">About</a>
                </li>
                <li>
                    <a href="/#Menu">Menu</a>
                </li>
                <li>
                    <Link to="/booking">Reservations</Link>
                </li>
                <li>
                    <a href="/#OrderOnline">Order Online</a>
                </li>
                <li>
                    <a href="/#LogIn">Log In</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;