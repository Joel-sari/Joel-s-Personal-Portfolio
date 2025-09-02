import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 ">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi I'm </span>
            <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">
              Joel
            </span>
            <span className="text-gradient ml-4 opacity-0 animate-fade-in-delay-2">
              Sari
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m a Computer Science student at Georgia Tech and Software
            Engineering Intern at Synchrony, passionate about building scalable
            tools that solve real-world problems. From designing intuitive UIs
            in React to automating workflows with backend systems, I thrive at
            the intersection of engineering and creativity.
          </p>
        </div>
        <div className="opacity-0 animate-fade-in-delay-4 mt-8">
          <a href="#projects" className="cosmic-button">
            View My Work
          </a>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span>Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
