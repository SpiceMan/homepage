import { Routes, Route } from "react-router-dom";

const PostNavigation = () => {
    return <h3>Post Navigation</h3>;
}

const Navigation = () => {
    return <h3>Links</h3>;
};


export default NavigationRouter = () => {
    return (
        <Routes>
            <Route path="/post/*" element={<PostNavigation /> } />
            <Route path="*" element={<Navigation />} />
        </Routes>
    );
};