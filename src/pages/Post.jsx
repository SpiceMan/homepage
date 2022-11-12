import { useContext, useEffect } from "react";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Page from "../elements/Page";
import StashContext from "../contexts/StashContext";

export const PostList = () => {
    return <>PostList</>;
}

export const PostView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const stash = useContext(StashContext);

    const post = stash.getObjectById(id);

    useEffect(() => {
        if (!post) {
            navigate("/error/404");
        }
    }, [post, navigate]);

    if( ! post ) { 
        return null;
    }

    return <Page title={post.title} content={post.content} />;
};

export default PostRouter = () => {

    return <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id" element={<PostView />} />
    </Routes>
};