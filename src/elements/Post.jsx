import { Form, Stack, Button } from "react-bootstrap";
import Title from "../elements/Title";

export const PostViewNavigation = () => {
    return <h3>Post View</h3>;
}

export const PostListNavigation = () => {
    return <h3>Posts Navigation</h3>;
}

export const PostNewNavigation = () => {
    return <>
        <h4 className="text-center">Actions</h4>
        <Stack gap={2}>
            <Button variant="outline-primary">Save & Publish</Button>
            <Button variant="outline-success">Save</Button>
        </Stack>
    </>;
};

export default PostForm = ({ setTitle, setContent }) => {
    return <Form>
        <Form.Group controlId="post-title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={setTitle} placeholder="Post title" />
        </Form.Group>
        <Form.Group controlId="post-content">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" onChange={setContent} rows={5} placeholder="Content" className="input-textarea" />
        </Form.Group>
    </Form>;
};