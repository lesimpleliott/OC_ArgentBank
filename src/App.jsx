import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
