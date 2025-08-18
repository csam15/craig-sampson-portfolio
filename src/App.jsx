import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <div className="bg-background">
      <div>
        <Header />
        <Hero />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
