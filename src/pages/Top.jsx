import { Routes, Route } from "react-router-dom";

import PostRouter from "./Post";

export const Top = () => {
    return <>
        <h1 className="text-center">Bienvenido a la madriguera de Spice</h1>
        <p>Sitio random de la web, con mis divagues.</p>
    </>
};

export const TopRouter = () => {
    return (
        <Routes>
            <Route path="/post/*" element={<PostRouter />} />
            <Route path="/" element={<Top />} />
        </Routes>
    );
};