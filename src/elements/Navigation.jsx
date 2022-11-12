import { Routes, Route } from "react-router-dom";

const PostNavigation = () => {
    return <h1>Post Navigation</h1>;
}

const Navigation = () => {
    return <h1>Links</h1>;
};


export default NavigationRouter = () => {
    return (
        <Routes>
            <Route path="/post/*" element={<PostNavigation /> } />
            <Route path="*" element={<Navigation />} />
        </Routes>
    );
};