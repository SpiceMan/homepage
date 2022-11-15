import React, { useState, useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import "./index.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./fonts/fonts.css";

import Header from "./elements/Header";
import Footer from "./elements/Footer";
import NavigationRouter from "./elements/Navigation";

import UserContext from "./contexts/UserContext";
import StashContext, { Stash } from "./contexts/StashContext";
import ConfigContext from "./contexts/ConfigContext";
import config from "./config";

import { TopRouter } from "./pages/Top";
import User from "./classes/User";

const Content = () => {
    const [user, setUser] = useState(new User("anonymous", ["guest"] ));
    const [stash, setStash] = useState(Stash);
    
    return (
        <UserContext.Provider value={user}>
        <ConfigContext.Provider value={config}>
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
        </ConfigContext.Provider>
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


