import React, { useState, useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fonts/fonts.css";

import Header from "./elements/Header";
import Footer from "./elements/Footer";
import NavigationRouter from "./elements/Navigation";

import UserContext from "./contexts/UserContext";
import StashContext, { Stash } from "./contexts/StashContext";

import { TopRouter } from "./pages/Top";

const api = {

};

const Content = () => {
    const [user, setUser] = useState({ name: "anonymous", roles: ["guest"] });
    const [stash, setStash] = useState(new Stash());
    
    const userContext = useContext(UserContext);

    return (
        <UserContext.Provider value={user}>
        <StashContext.Provider value={stash}>
            <Header />
            <Container>
                <Row>
                    <Col sm="9"><TopRouter /></Col>
                    <Col sm="3"><NavigationRouter /></Col>
                </Row>
            </Container>
            <Footer />
        </StashContext.Provider>
        </UserContext.Provider>
    );
};

const App = () => {
    const [loaded, setLoaded] = useState(true);

    if (!loaded) {
        return <>Loading</>;
    }

    return <Content setLoaded={setLoaded} />;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<React.StrictMode><Router>
    <App />
</Router></React.StrictMode>);


