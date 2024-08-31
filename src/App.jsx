import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Chapters from "./pages/Chapters";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const locationArr = location.pathname?.split("/") ?? [];
  return (
    <AnimatePresence mode="wait">
      <div className="App">
        <Navbar></Navbar>
        <Routes location={location} key={locationArr[1]}>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/about" element={<About></About>} />
          <Route exact path="/chapters" element={<Chapters></Chapters>} />
          <Route exact path="/events" element={<Events></Events>} />
          <Route exact path="/contact-us" element={<Contact></Contact>} />
        </Routes>
        <Footer></Footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
