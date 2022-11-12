import { Routes, Route, useParams } from "react-router-dom";
import Page from "../Elements/Page";


export default Error = () => {
    const { http_code } = useParams();
    return <Routes>
        <Route path="/*" element={<Page title="Error 404!" content="Error 404 - Page not found." error centered />} />
        <Route path="/500" element={<Page title="Error 500!" content="Error 500 - Internal server error." error centered />} />
    </Routes>

};