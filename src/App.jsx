import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/home.jsx";
import Calligraphy from "./pages/calligraphy.jsx";
import Electronics from "./pages/electronics.jsx";
import WebDev from "./pages/webdev.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Header className="sticky top-0 z-50" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calligraphy" element={<Calligraphy />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/webdev" element={<WebDev />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}  

export default App;
