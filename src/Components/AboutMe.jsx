import { Briefcase, Code, User } from "lucide-react";
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">
            Software Engineer Intern • CS @ Georgia Tech
          </h3>
          <p className="text-muted-foreground">
            I design and ship product features from sketch to production. At
            Synchrony I worked on internal, analyst‑facing tools in the Credit
            Technology Strategy Team; keeping things secure, usable, and
            reliable. I prototype in Figma and turn those ideas into polished
            React apps backed by well‑structured services.
          </p>
          <p className="text-muted-foreground">
            Beyond work, I’m very hands‑on by building a growth site for PS
            &amp; Sons Construction, a real‑time CryptoWatch dashboard, and I’ve
            been a finalist on two AI hackathon projects. When I’m not coding,
            you’ll probably find me playing pickup soccer, practicing guitar,
            chatting in Spanish with friends, or reading markets/finance. Clear
            UX, measurable outcomes, and dependable delivery are my north stars.
          </p>
          <div className="pt-2 flex flex-col justify-center">
            <p className="text-medium font-medium font-semibold mb-2 text-muted-foreground/90">
              Some Involvements & Hobbies:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                SHPE @ Georgia Tech
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                GT iOS Club — Developer
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                Intramural Soccer
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                Spanish Music
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                Playing Guitar
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                Investing
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                Gym & Fitness
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">
                Coding
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 ">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Product Engineering</h4>
                <p className="text-muted-foreground">
                  Own features end‑to‑end — ideation, prototyping,
                  implementation, and iteration; with attention to performance,
                  telemetry, and reliability.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">UI/UX</h4>
                <p className="text-muted-foreground">
                  Design systems, accessibility, and rapid feedback loops to
                  turn ideas into interfaces people enjoy using.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Agile & Collaboration</h4>
                <p className="text-muted-foreground">
                  SAFe® 6 Scrum Master — run standups, plan sprints, write
                  tickets, and keep multi‑disciplinary teams moving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
