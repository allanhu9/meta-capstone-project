import logo2 from '../images/logo2.png';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div id='footerLogoDiv'>
                <img src={logo2} alt="logo"></img>
            </div>
            <div>
                <h4>Doormat Navigations</h4>
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
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li>
                        <a href="/#Address">Address</a>
                    </li>
                    <li>
                        <a href="/#PhoneNumber">Phone Number</a>
                    </li>
                    <li>
                        <a href="/#Mail">Mail</a>
                    </li>
                </ul>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <ul>
                    <li>
                        <a href="/#Instagram">Instagram</a>
                    </li>
                    <li>
                        <a href="/#Youtube">Youtube</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;