import logo from './logo.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookingForm from './BookingForm';

const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#FFFFFF',
    color: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

const logoStyles = {
    marginRight: '20px',
    height: '40px'
};

const navStyles = {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-around',
    listStyleType: 'none',
    padding: 0,
    margin: 0
};

const linkStyles = {
    color: '#000000',
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
};

const linkHoverStyles = {
    backgroundColor: '#555'
};

function Header() {
    return (
        <Router>
            <header style={headerStyles}>
                <img src={logo} alt="Little Lemon logo" style={logoStyles} />
                <nav style={{ flex: 1 }}>
                    <ul style={navStyles}>
                        <li>
                            <Link to="/" style={linkStyles} onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyles.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" style={linkStyles} onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyles.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/BookingForm" style={linkStyles} onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyles.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                                Reserve a table
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" style={linkStyles} onMouseEnter={(e) => e.target.style.backgroundColor = linkHoverStyles.backgroundColor} onMouseLeave={(e) => e.target.style.backgroundColor = ''}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element="" />
                <Route path="/about" element="{} "/>
                <Route path="/BookingForm" element={<BookingForm />} />
                <Route path="/contact" element="{}" />
            </Routes>
        </Router>
    );
}

export default Header;
