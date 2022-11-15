import { Form, Button } from "react-bootstrap";

export default Login = () => {
    return <>
        <Form>
            <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username:</Form.Label>
                <Form.Control type="input" placeholder="User name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className="text-center">
            <Button variant="outline-primary" type="submit">
                Sign in
            </Button>
            </div>
        </Form>
    </>;
};