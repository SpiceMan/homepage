import { createRoot } from "react-dom/client";

const App = () => {
    const [loaded, setLoaded] = useState(true);

    if (!loaded) {
        return <>Loading</>;
    }

    return <Content setLoaded={setLoaded} />;
};

const root = createRoot(container);
root.render(<React.StrictMode><Router>
    <App />
</Router></React.StrictMode>);


