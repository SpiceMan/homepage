import { Routes, Route } from "react-router-dom";

import { PostNewNavigation, PostViewNavigation, PostListNavigation } from "./Post"

const Navigation = () => {
    return <>
        <h3>Links</h3>
    </>;
};

export default NavigationRouter = () => {
    return (
        <Routes>
            <Route path="/post/" exact element={<PostListNavigation />} />
            <Route path="/post/new" exact element={<PostNewNavigation />} />
            <Route path="/post/:id" element={<PostViewNavigation />} />
            <Route path="*" element={<Navigation />} />
        </Routes>
    );
};