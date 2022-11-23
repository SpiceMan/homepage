require("./index.css");
var $l9KIq$reactjsxruntime = require("react/jsx-runtime");
var $l9KIq$react = require("react");
var $l9KIq$reactdomclient = require("react-dom/client");
var $l9KIq$reactrouterdom = require("react-router-dom");
var $l9KIq$reactanimejs = require("react-animejs");
var $l9KIq$reactbootstrap = require("react-bootstrap");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}






var $f9d30f6095347c8b$export$2e2bcd8739ae039 = tagContext = /*#__PURE__*/ (0, $l9KIq$react.createContext)(null);



var $e0464310399df1b3$export$2e2bcd8739ae039 = ThemeContext = /*#__PURE__*/ (0, $l9KIq$react.createContext)(null);






const { Anime: $30db62e21931dab9$var$Anime , stagger: $30db62e21931dab9$var$stagger  } = (0, ($parcel$interopDefault($l9KIq$reactanimejs)));
const $30db62e21931dab9$export$669f6ea7d267feaf = ()=>{
    const tags = (0, $l9KIq$react.useContext)((0, $f9d30f6095347c8b$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)($30db62e21931dab9$var$Anime, {
        initial: [
            {
                targets: ".loading",
                scale: 1.1,
                duration: 400,
                direction: "alternate",
                loop: true,
                easing: "easeInOutQuad"
            }
        ],
        children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("div", {
            className: "middlecenter-container",
            children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("div", {
                className: "loading",
                children: tags.loading
            })
        })
    });
};








const $52428f9db7f0a1af$export$d9b273488cd8ce6f = ({})=>{
    const tags = (0, $l9KIq$react.useContext)((0, $f9d30f6095347c8b$export$2e2bcd8739ae039));
    const themeContext = (0, $l9KIq$react.useContext)((0, $e0464310399df1b3$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Navbar), {
        expand: "lg",
        children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactbootstrap.Container), {
            children: [
                /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Navbar).Brand, {
                    as: (0, $l9KIq$reactrouterdom.Link),
                    to: "/",
                    children: tags.questy
                }),
                /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Navbar).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Navbar).Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactbootstrap.Nav), {
                        className: "me-auto",
                        children: [
                            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.Nav).Link, {
                                as: (0, $l9KIq$reactrouterdom.Link),
                                to: "/",
                                children: tags["top-page"]
                            }),
                            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.NavDropdown), {
                                title: tags.settings,
                                id: "basic-nav-dropdown",
                                children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactbootstrap.NavDropdown).Item, {
                                    onClick: ()=>themeContext.toggleTheme(),
                                    children: tags["toggle-theme"]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};






const { Anime: $500d402a1d60379c$var$Anime  } = (0, ($parcel$interopDefault($l9KIq$reactanimejs)));
const $500d402a1d60379c$export$b5dcd99aa85de985 = ({ setAnimateLayout: setAnimateLayout  })=>{
    const themeContext = (0, $l9KIq$react.useContext)((0, $e0464310399df1b3$export$2e2bcd8739ae039));
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)($500d402a1d60379c$var$Anime, {
        initial: [
            {
                targets: ".content-animation",
                scale: [
                    0,
                    1.5
                ],
                opacity: 1,
                duration: 50,
                easing: "easeInOutSine"
            },
            {
                targets: ".content-animation",
                scale: 1,
                opacity: 1,
                borderRadius: 0,
                top: "56px",
                height: "100%",
                width: "100%",
                backgroundColor: "#071b21",
                duration: 150,
                easing: "easeInOutSine",
                complete: ()=>{
                    setAnimateLayout(false);
                }
            }
        ],
        children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("div", {
            className: "middlecenter-container",
            children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("div", {
                className: "content-animation"
            })
        })
    });
};



const $91fc7c7f5ab63f5b$var$TopPage = ()=>{
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("div", {
        className: "content",
        children: "Top Page"
    });
};
const $91fc7c7f5ab63f5b$var$Content = ({})=>{
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)("div", {
        className: "container",
        children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactrouterdom.Routes), {
            children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactrouterdom.Route), {
                path: "/",
                element: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)($91fc7c7f5ab63f5b$var$TopPage, {})
            })
        })
    });
};
const $91fc7c7f5ab63f5b$var$App = ({ setTags: setTags , loading: loading , setLoading: setLoading  })=>{
    const [animateLayout, setAnimateLayout] = (0, $l9KIq$react.useState)(true);
    const tags = (0, $l9KIq$react.useContext)((0, $f9d30f6095347c8b$export$2e2bcd8739ae039));
    if (loading) return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $30db62e21931dab9$export$669f6ea7d267feaf), {});
    if (animateLayout) return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $500d402a1d60379c$export$b5dcd99aa85de985), {
        setAnimateLayout: setAnimateLayout
    });
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsxs)((0, $l9KIq$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $52428f9db7f0a1af$export$d9b273488cd8ce6f), {
                className: "menu"
            }),
            /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)($91fc7c7f5ab63f5b$var$Content, {})
        ]
    });
};
const $91fc7c7f5ab63f5b$var$Wrapper = ()=>{
    const [tags, setTags] = (0, $l9KIq$react.useState)({
        loaded: false
    });
    const [theme, setTheme] = (0, $l9KIq$react.useState)(null);
    const [language, setLanguage] = (0, $l9KIq$react.useState)(null);
    const [loading, setLoading] = (0, $l9KIq$react.useState)(true);
    const toggleTheme = ()=>{
        let new_theme = document.querySelector("body").classList.contains("dark-theme") ? "light-theme" : "dark-theme";
        let old_theme = new_theme === "dark-theme" ? "light-theme" : "dark-theme";
        const body = document.querySelector("body");
        body.classList.replace(old_theme, new_theme);
        setTheme(new_theme);
    };
    (0, $l9KIq$react.useEffect)(()=>{
        let theme = localStorage.getItem("user.theme") || "dark-theme";
        setTheme(theme);
    }, []);
    (0, $l9KIq$react.useEffect)(()=>{
        let lang = localStorage.getItem("user.language") || "ja";
        if (lang !== localStorage.getItem("user.language")) {
            if (/^en/.test(navigator.language)) lang = "en";
            else if (/^ja/.test(navigator.language)) lang = "ja";
            setLanguage(lang);
            localStorage.setItem("user.language", lang);
        }
        setLanguage(lang);
    }, []);
    (0, $l9KIq$react.useEffect)(()=>{
        if (language && !tags.loaded) (async ()=>{
            const res = await fetch(`/tags.${language}.json`);
            const json = await res.json();
            tags[language] = json;
            tags.loaded = true;
            setTags(tags[language]);
            setTimeout(()=>{
                setLoading(false);
            }, 1000);
        })();
    }, [
        language
    ]);
    return /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $f9d30f6095347c8b$export$2e2bcd8739ae039).Provider, {
        value: tags,
        children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $e0464310399df1b3$export$2e2bcd8739ae039).Provider, {
            value: {
                theme: theme,
                toggleTheme: toggleTheme
            },
            children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)($91fc7c7f5ab63f5b$var$App, {
                setTags: setTags,
                loading: loading,
                setLoading: setLoading
            })
        })
    });
};
const $91fc7c7f5ab63f5b$var$root = (0, $l9KIq$reactdomclient.createRoot)(document.getElementById("root"));
$91fc7c7f5ab63f5b$var$root.render(/*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, ($parcel$interopDefault($l9KIq$react))).StrictMode, {
    children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)((0, $l9KIq$reactrouterdom.BrowserRouter), {
        children: /*#__PURE__*/ (0, $l9KIq$reactjsxruntime.jsx)($91fc7c7f5ab63f5b$var$Wrapper, {})
    })
}));


//# sourceMappingURL=index.js.map
