import { useContext } from "react";
import ReactAnime from "react-animejs";
const { Anime } = ReactAnime;

import ThemeContext from "../context/theme";

export const IntroAnimation = ({ setAnimateIntro }) => {
    const themeContext = useContext(ThemeContext);

    return <Anime
        initial={
            [
                { targets: ".content-animation", scale: [0, 1.5], opacity: 1, duration: 100, easing: "easeInOutSine" },
                { 
                    targets: ".content-animation",
                    scale: 1,
                    opacity: 1,
                    borderRadius: 0,
                    top: 0,
                    height: "56px",
                    width: "100%",
                    backgroundColor: "#071b21",
                    duration: 250,
                    easing: "easeInOutSine",
                    complete: () => { setAnimateIntro(false)}
                },
            ]
        }>
        <div className="middlecenter-container">
            <div className="content-animation"></div>
        </div>
    </Anime>
};