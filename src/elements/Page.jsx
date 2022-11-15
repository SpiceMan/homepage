import { Container } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import Title from "./Title";

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
        <Title title={title} centered={centered} />
        <div className={ centered && "text-center"} >{content}</div>
    </Container>;
};