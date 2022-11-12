import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default Header = () => {
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
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </>;
};

