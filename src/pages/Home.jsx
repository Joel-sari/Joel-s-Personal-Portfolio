import React from "react";
import ThemeToggle from "../Components/ThemeToggle";
import StarBackground from "../Components/StarBackground";
import Navbar from "../Components/Navbar";

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

      {/* Footer */}
    </div>
  );
};

export default Home;
