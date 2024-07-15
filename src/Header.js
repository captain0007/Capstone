
import logo from './logo.png'; 

function Header() {
    return (
        <header>
            <div style={{ display:'flex' } }>
                <img src={logo} alt="Little Lemon logo" style={{ marginRight: '20px' }} />
                <nav style={{ flex:1 } }>
                    <ul style={{ display: 'flex', padding: 0, margin: 0 }} >
                        <li style={{ margin: '0 10px' }}><a href="#home">Home</a></li>
                        <li style={{ margin: '0 10px' }}><a href="#about">About</a></li>
                        <li style={{ margin: '0 10px' }}><a href="#menu">Menu</a></li>
                        <li style={{ margin: '0 10px' }}><a href="#contact">Contact</a></li>
                </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
