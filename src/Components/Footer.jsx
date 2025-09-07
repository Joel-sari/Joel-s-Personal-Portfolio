import { ArrowUp } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <div className="flex items-center space-x-3">
        <img
          src="/Joelsarilogo.png"
          alt="Joel Sari Logo"
          className="h-8 w-8 object-contain"
        />
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Joelsari.co. All rights reserved.
        </p>
      </div>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

export default Footer;
