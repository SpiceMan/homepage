import { config } from "process";
import { useState, useContext, useEffect } from "react";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Routes, Route } from "react-router-dom";
import { useSpring, animated as a, config } from "react-spring";
import { start } from "repl";

import LanguageContext from "../context/language";
import ThemeContext from "../context/theme";

const MenuLink = ({ to, text, changeCurrent, drawUnderline, resetUnderline }) => {
    return <Nav.Link as={Link}
        to={to}
        onClick={(ev) => changeCurrent(ev.target.getAttribute("href"))}
        onMouseOver={(ev) => drawUnderline(ev.target.getAttribute("href"))}
        onMouseOut={() => resetUnderline()}
    >
        {text}
    </Nav.Link>;
};

const MainMenu = ({ redraw }) => {
    const languageContext = useContext(LanguageContext);
    const themeContext = useContext(ThemeContext);
    const [current, setCurrent] = useState(window.location.pathname);
    const [animationProps, setAnimationProps] = useState(null);
    const [dimensions, setDimensions] = useState({ height: window.innerHeight, width: window.innerWidth });

    const props = useSpring(animationProps);

    const drawUnderline = (href) => {
        const currentLink = document.querySelector(`.menu a.nav-link[href='${href}']`);

        if (currentLink) {
            const new_props = {
                to: {
                    width: currentLink.offsetWidth,
                    top: currentLink.scrollTop + currentLink.offsetHeight,
                    left: currentLink.offsetLeft,
                    config: config.wobbly,
                }
            };

            setAnimationProps(new_props);
        }
    };

    const changeCurrent = (cur) => {
        drawUnderline(cur);
        setCurrent(cur);
    };

    const resetUnderline = () => {
        drawUnderline(current);
    }

    useEffect( resetUnderline, [dimensions]);

    useEffect( () => {
        const handleResize = () => {
            setDimensions({ height: window.innerHeight, width: window.innerWidth });
        };

        window.addEventListener("resize", handleResize);

        changeCurrent(current);
    }, []);

    const { language: lang, tags, setLanguage } = languageContext;
    const new_lang = (lang === "en" ? "ja" : "en");

    useEffect(() => {
        changeCurrent(current);
    }, [lang]);

    return (
        <Navbar className="menu">
            <Nav className="mx-auto" expand="lg">
                <MenuLink to="/" text={tags.page.link.top} changeCurrent={changeCurrent} drawUnderline={drawUnderline} resetUnderline={resetUnderline} />
                {/* <MenuLink to="/blog" text={tags.page.link.blog} changeCurrent={changeCurrent} drawUnderline={drawUnderline} resetUnderline={resetUnderline} />
                <MenuLink to="/projects" text={tags.page.link.projects} changeCurrent={changeCurrent} drawUnderline={drawUnderline} resetUnderline={resetUnderline} /> */}
                <MenuLink to="/curriculum-vitae" text={tags.page.link.cv} changeCurrent={changeCurrent} drawUnderline={drawUnderline} resetUnderline={resetUnderline} />
                <a.span className="underline" style={props}></a.span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={tags.settings} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={() => setLanguage(new_lang)}>
                                {lang === "en" ? tags.language.ja : tags.language.en}
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => themeContext.toggleTheme()}>
                                {themeContext.theme === "dark-theme" ? tags["light-theme"] : tags["dark-theme"]}
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Nav>
        </Navbar>
    );
};

const MenuRouter = ({ startTransition }) => {
    return <Routes>
        <Route path="/*" element={ <MainMenu className="menu" startTransition={startTransition} /> } />;
    </Routes>
};

export default MenuRouter;