import { Routes, Route } from "react-router-dom";

import Error from "./Error";
import PostRouter from "./Post";
import Login from "./Login";

export const Top = () => {
    return <>
        <h1 className="text-center">Bienvenido a la madriguera de Spice</h1>
        <p>Sitio random de la web, con mis divagues.</p>
    </>
};

export const TopRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login /> } />
            <Route path="/post/*" element={<PostRouter />} />
            <Route path="/" element={<Top />} />
            <Route path="/error/*" element={<Error /> } />
        </Routes>
    );
};