import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Profil from "./assets/pages/Profil";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

const App = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/profil" element={<Profil />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
