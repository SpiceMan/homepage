import React, { useState, useEffect, useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSpring, animated as a, config } from "react-spring";

import "./index.scss";

import LanguageContext from "./context/language";
import ThemeContext from "./context/theme";

import { Loading } from "./parts/loading";

import MenuRouter from "./parts/menu";
import ContentRouter from "./pages/content";

const Content = ({ }) => {
    return <div className="container">
        <Routes>
            <Route path="/*" element={<ContentRouter />} />
        </Routes>
    </div>;
};

const App = ({ setTags, loading, setLoading }) => {
    const [animateIntro, setAnimateIntro] = useState(true);
    const [transition, setTransition] = useState(false);

    const body = document.querySelector("body");
    const intro_props = useSpring({
        cancel: loading,
        from: {
            opacity: 0,
            top: body.offsetHeight / 2 - 25,
            left: body.offsetWidth / 2 - 25,
            width: 50,
            height: 50,
            borderRadius: 50,
        },
        to: {
            opacity: 1,
            borderRadius: 0,
            top: 0,
            left: 0,
            height: 56,
            width: body.offsetWidth,
        },
        config: { duration: 150, ...config.molasses },
        onRest: () => setAnimateIntro(false)
    });

    const transition_props = useSpring({
        cancel: !transition,
        from: { opacity: 1 },
        to: { opacity: 0 }
    });

    if (loading) {
        return <Loading />;
    }

    if (animateIntro) {
        return <a.div style={intro_props} className="content-animation"></a.div>;
    }

    const startTransition = () => {
        setTransition(true);
    };

    return <>
        <MenuRouter startTransition={startTransition} />
        <a.div style={transition_props}><Content /></a.div>
    </>;
};

const Wrapper = () => {
    const [tags, setTags] = useState({ loaded: false });
    const [theme, setTheme] = useState(localStorage.getItem("user.theme") || "light-theme");
    const [language, setLanguage] = useState(null);
    const [loadLanguage, setLoadLanguage] = useState(null);
    const [loading, setLoading] = useState(true);

    const changeLanguage = (new_lang) => {
        setLoadLanguage(new_lang);
        localStorage.setItem("user.language", new_lang);
    }

    const changeToTheme = (new_theme) => {
        const old_theme = (new_theme === "light-theme") ? "dark-theme" : "light-theme";

        const body = document.querySelector("body");
        body.classList.replace(old_theme, new_theme);
    };

    const toggleTheme = () => {
        const new_theme = (theme === "dark-theme") ? "light-theme" : "dark-theme";

        localStorage.setItem("user.theme", new_theme);

        changeToTheme(new_theme);
        setTheme(new_theme);
    };

    useEffect(() => {
        changeToTheme(theme);
    }, [theme]);

    useEffect(() => {
        let lang = localStorage.getItem("user.language") || "ja";

        if (lang !== localStorage.getItem("user.language")) {
            if (/^en/.test(navigator.language)) {
                lang = "en";
            }
            else if (/^ja/.test(navigator.language)) {
                lang = "ja";
            }

        }
        changeLanguage(lang);
    }, []);

    useEffect(() => {
        if (loadLanguage && !tags.loaded) {
            (async () => {
                const res = await fetch(`/tags.${loadLanguage}.json`);
                const json = await res.json();
                tags[loadLanguage] = json;
                tags.loaded = true;

                setTags(tags[loadLanguage]);
                setLanguage(loadLanguage);

                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            })();
        }
        else {
            setLanguage(loadLanguage);
        }


    }, [loadLanguage]);


    return <LanguageContext.Provider value={{ language: language, tags: tags, setLanguage: changeLanguage }}>
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
            <App setTags={setTags} loading={loading} setLoading={setLoading} />
        </ThemeContext.Provider>
    </LanguageContext.Provider>;
};

const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode><Router>
    <Wrapper />
</Router></React.StrictMode>);