import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/*Theme Toggle (light to dark mode) */}
      <ThemeToggle />

      {/* Background effects (starts and meteor showers) */}
      <StarBackground />
      {/* NavBar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
