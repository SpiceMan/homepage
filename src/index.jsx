import React, { useState, useEffect, useContext } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { useSpring, animated as a } from "react-spring";

import "./index.scss";

import TagsContext from "./context/tags";

import { Loading } from "./parts/loading";


const Content = ({ }) => {
    const props = useSpring({
        transform: `translateX(30px)`,
    });
    return <><div className="top-line" style={props}><Menu /></div></>;
};

const Menu = ({ }) => {
    return <div className="menu">Menu</div>;
};


const App = ({ setTags, loading, setLoading }) => {
    const [moveMenu, setMoveMenu] = useState(false);

    const tags = useContext(TagsContext);
    
    if (loading) {
        return <Loading />;
    }

    return <Content setLoaded={setLoading} />;
};

const Wrapper = () => {
    const [tags, setTags] = useState({ loaded: false });
    const [language, setLanguage] = useState( "ja" );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!tags.loaded) {
            (async () => {
                const res = await fetch(`/tags.${language}.json`);
                const json = await res.json();
                tags[language] = json;
                tags.loaded = true;
                
                console.log(tags)
                setTags(tags[language]);
                setLoading(false);
            })();
        }

    }, []);


    return <TagsContext.Provider value={tags}>
        <App setTags={setTags} loading={loading} setLoading={setLoading} />
    </TagsContext.Provider>;
};

const root = createRoot(document.getElementById("root"));
root.render(<React.StrictMode><Router>
    <Wrapper />
</Router></React.StrictMode>);