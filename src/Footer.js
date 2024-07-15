import footer from './footer.png';
function Footer() {
    return (
        <footer>
            <div style={{display:'flex'} }>
                <img src={footer} alt="footer"></img>
                <div style={{alignContent:'space-between', padding:'20px'} }>
                <h5>Navigation</h5>
                <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservation">Reservation</a></li>
                        <li><a href="#Orderonline">Order Online</a></li>
                        <li><a href="#Login">Login</a></li>
                    </ul>
                </div>
                <div style={{ alignContent: 'space-between', padding: '20px' }}>
                    <h5>Contacts</h5>
                    <ul>
                        <li><a href="#admin">Admin</a></li>
                        <li><a href="#phone Number">Phone Number</a></li>
                        <li><a href="#email">email</a></li>
                    </ul>
                </div>
                <div style={{ alignContent: 'space-between', padding: '20px' }}>
                    <h5>Social Media</h5>
                    <ul>
                        <li><a href="#Facebook">Facebook</a></li>
                        <li><a href="#Instigram">Instigram</a></li>
                    </ul>
                </div>
                <div style={{ alignContent:'flex-end' } }>
                    <p>&copy; 2024 Little Lemon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
