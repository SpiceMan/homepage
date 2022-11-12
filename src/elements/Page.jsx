import { Container } from "react-bootstrap";

export default Page = ({ title, content }) => {
    return <Container>
        <h1 className="text-center">{title}</h1>
        {content}
    </Container>;

};