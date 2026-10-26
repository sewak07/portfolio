import Header from "../components/layouts/Header.jsx";

import Hero from "../content/Hero.jsx";
import FeaturedProject from "../content/FeaturedProject.jsx";
import Skills from "../content/Skills.jsx";
import Contact from "../content/Contact.jsx";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home-container">
        <Hero />

        <FeaturedProject />

        <Skills />

        <Contact />
      </main>
    </>
  );
}