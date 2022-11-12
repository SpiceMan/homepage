import { Container } from "react-bootstrap";
import { Alert } from "react-bootstrap";

export default Page = ({ title, content, centered, error }) => {
    if( error ) {
        return <Alert variant="danger" className="bg-dark">
            <Alert.Heading>{title}</Alert.Heading>
            <p>
                {content}
            </p>
        </Alert>
    }

    return <Container>
        <h1 className={ centered && "text-center"}>{title}</h1>
        <div className={ centered && "text-center"} >{content}</div>
    </Container>;
};