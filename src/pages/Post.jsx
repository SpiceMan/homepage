import { useState, useContext, useEffect } from "react";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { marked } from "marked";

import Page from "../elements/Page";
import Title from "../elements/Title";
import PostForm from "../elements/Post";

import StashContext from "../contexts/StashContext";

export const PostNew = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [content_html, setContentHTML] = useState("");


    useEffect(() => {
        setContentHTML(marked.parse(content))
    }, [content, setContentHTML]);

    return <>
        <Container>
            <Title centered title="New post" />
            <Row>
                <Col>
                    <PostForm setTitle={(ev) => setTitle(ev.target.value)} setContent={(ev) => setContent(ev.target.value)} /></Col>
                <Col>
                    {(title || content_html) && <h2 className="text-center">Preview</h2>}
                    <Title title={title} />
                    <p dangerouslySetInnerHTML={{ __html: content_html }}></p>
                </Col>
            </Row>
        </Container>
    </>;
};

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

    if (!post) {
        return null;
    }

    return <Page title={post.title} content={post.content} />;
};

export const PostListEntry = ({ post }) => {
    return <Card bg="black">
        <Card.Body>
            <Card.Header as="h5">{post.title}</Card.Header>
            <Card.Text>{post?.content?.substring(0, 100)}</Card.Text>
            <Card.Footer style={ { textAlign: "right" } }>
                <Button as={Link} variant="outline-primary" to={"/post/" + post.id}>Read</Button>
            </Card.Footer>

        </Card.Body>
    </Card >;
};

export const PostList = () => {
    const stash = useContext(StashContext);

    const posts = stash.list;

    return <>
        <Title title="Post list" centered />
        <ul>
            {posts.map(p => <PostListEntry key={p.id} post={p} />)}
        </ul>
    </>;
};


export default PostRouter = () => {

    return <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/new" element={<PostNew />} />
        <Route path="/:id" element={<PostView />} />
    </Routes>
};