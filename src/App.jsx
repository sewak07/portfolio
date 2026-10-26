import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects";

import Footer from "./components/layouts/Footer.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;