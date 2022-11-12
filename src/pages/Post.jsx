import { useContext } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Page from "../elements/Page";
import StashContext from "../contexts/StashContext";

export const PostList = () => {
    return <>PostList</>;
}

export const PostView = () => {
    const { id } = useParams();

    console.log(id);
    return <Page title={post.title} content={post.content} />;
};

export default PostRouter = () => {
    const stash = useContext(StashContext);

    return <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/:id" element={<PostView />} />
    </Routes>
};