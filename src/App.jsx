import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Explica from "./pages/Explica/Explica.jsx";

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explica" element={<Explica />} />
            </Routes>
        </BrowserRouter>
    );
};
