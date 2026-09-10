import { BrowserRouter, Routes, Route } from "react-router-dom";
import Brazil from "./pages/Brasil/Brazil.jsx";
import Home from "./pages/Home/Home.jsx";
import Explica from "./pages/Explica/Explica.jsx";
import { CalcProvider } from "./context/CalcProvider.jsx";

export default function App () {
    return (
        <BrowserRouter>
            <CalcProvider>
                <Routes>
                    <Route path="/" element={<Brazil />} />
                    <Route path="/calculo" element={<Home />} />
                    <Route path="/explica" element={<Explica />} />
                </Routes>
            </CalcProvider>
        </BrowserRouter>
    );
};
