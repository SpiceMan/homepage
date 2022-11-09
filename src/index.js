import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

const Header = () => {
    return <>
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>La Madriguera de Spice</Navbar.Brand>
                <Row>
                    <Col>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#something">Something</Nav.Link>
                            <Nav.Link href="#else">Else</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>test
                    test
                    </Col>
                </Row>
            </Container>
        </Navbar>
    </>;
};
const Footer = () => {
    return <>Footer</>;
};
const Content = () => {
    return <>Content</>;
};

const App = () => {
    const [loaded, setLoaded] = useState(true);


    if (!loaded) {
        return <></>;
    }

    return <Container >
        <Header />
        <Row><Col><Content /></Col></Row>
        <Row><Col><Footer /></Col></Row>
    </Container>;
};


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

