import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from 'react';
const Header = (props) => {
    const nagivate = useNavigate();
    const { count } = props
    const [itemQuantity, setItemQuantity] = useState(0);
    useEffect(() => {
        setItemQuantity(count)
    }, [count])
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavLink to='/' className="navbar-brand title">Veggy</NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className='nav-link' to="/">Home</NavLink>
                        <NavLink className='nav-link' to="/product">Product</NavLink>
                        <NavLink className='nav-link' to="/cart">Cart</NavLink>
                    </Nav>
                    <Nav>
                        <span className='cart-icon'>
                            <AiOutlineShoppingCart style={{ height: "2em", width: "2em" }} onClick = {()=>nagivate('/cart')} />
                            <span className='ball'>{itemQuantity}</span>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;