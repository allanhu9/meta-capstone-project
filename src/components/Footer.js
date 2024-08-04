import logo2 from '../images/logo2.png';
const Footer = () => {
    return (
        <footer>
            <img src={logo2} alt="logo"></img>
            <div>
                <h3>Doormat Navigations</h3>
                <ul>
                    <li>
                        <a href="/#home">Home</a>
                    </li>
                    <li>
                        <a href="/#About">About</a>
                    </li>
                    <li>
                        <a href="/#Menu">Menu</a>
                    </li>
                    <li>
                        <a href="/#Reservations">Reservations</a>
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
                <h3>Contact</h3>
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
                    <ul>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                    <ul>
                        <li>
                            <a href="/#Instagram">Instagram</a>
                        </li>
                        <li>
                            <a href="/#Youtube">Youtube</a>
                        </li>
                    </ul>
                    <ul>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;