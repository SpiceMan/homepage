import { useState, useContext } from "react";
import ReactAnime from "react-animejs";
const { Anime, stagger } = ReactAnime;
import { useSpring, animated as a, config } from "react-spring";

import LanguageContext from "../context/language";

export const Loading = () => {
    const { tags } = useContext(LanguageContext);
    const [flip, setFlip] = useState(true);

    const props = useSpring({
        to: {
            scale: 1.15,
        },
        from: {
            scale: 0.95 
        },
        reset: true,
        reverse: flip,
        easing: "easeInOutQuad",
        config: { duration: 300 },
        onRest: () => setFlip(!flip)
    })
    return <div className="middlecenter-container">
        <a.div className="loading" style={props}>{tags.loading}</a.div>
    </div>;
};