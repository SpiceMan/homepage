import { useContext } from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import UserContext from "../contexts/UserContext";

export default Header = () => {
    const user = useContext(UserContext);
    return <>
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>La Madriguera de Spice</Navbar.Brand>
                <Row>
                    <Col>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/lb3">Lyrics Butler</Nav.Link>
                            <Nav.Link as={Link} to="/japanese">Japanese</Nav.Link>
                            { user.isLogged() && <Nav.Link as={Link} to="/profile">Profile</Nav.Link> }
                            { user.isLogged() || <Nav.Link as={Link} to="/login">Sign in</Nav.Link> }
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </>;
};

