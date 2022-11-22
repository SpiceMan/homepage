import { useState, useContext } from "react";
import { useSpring, animated as a } from "react-spring";

import TagsContext from "../context/tags";

export const Loading = () => {
    const [flip, setFlip ] = useState(false);
    const tags = useContext(TagsContext);
    const props = useSpring({ 
        to: { scale: 1.2 }, 
        from: { scale: 1 },
        reset: true,
        reverse: flip,
        onRest: () => setFlip(!flip),

    });
    return <div className="loading-container"><a.div style={props} className="loading">{tags.loading}</a.div></div>;
};