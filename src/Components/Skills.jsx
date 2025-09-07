import React, { useState } from "react";
import { cn } from "../lib/util";

const skills = [
  // Languages
  { name: "Java", level: 85, category: "languages" },
  { name: "Python", level: 80, category: "languages" },
  { name: "JavaScript", level: 90, category: "languages" },
  { name: "TypeScript", level: 70, category: "languages" },
  { name: "SQL", level: 65, category: "languages" },
  { name: "Swift", level: 55, category: "languages" },
  { name: "C", level: 60, category: "languages" },

  // Frameworks & Libraries
  { name: "React", level: 90, category: "frameworks" },
  { name: "Next.js", level: 70, category: "frameworks" },
  { name: "Django", level: 65, category: "frameworks" },
  { name: "Spring Boot", level: 60, category: "frameworks" },
  { name: "Node.js", level: 60, category: "frameworks" },
  { name: "Express", level: 55, category: "frameworks" },
  { name: "Tailwind CSS", level: 85, category: "frameworks" },
  { name: "Flask", level: 70, category: "frameworks" },
  { name: "Swift UI", level: 50, category: "frameworks" },

  // Databases
  { name: "MongoDB", level: 65, category: "databases" },
  { name: "SQLite", level: 70, category: "databases" },
  { name: "MySQL", level: 60, category: "databases" },

  // Cloud & DevOps
  { name: "AWS", level: 70, category: "cloud/devops" },
  { name: "Docker", level: 50, category: "cloud/devops" },
  { name: "Git/GitHub", level: 90, category: "cloud/devops" },
  { name: "CI/CD", level: 55, category: "cloud/devops" },

  // Design & Tools
  { name: "Figma", level: 85, category: "design & tools" },
  { name: "Canva", level: 80, category: "design & tools" },
  { name: "VS Code", level: 95, category: "design & tools" },
  { name: "Postman", level: 75, category: "design & tools" },
];

const Skills = () => {
  const categories = [
    "all",
    "languages",
    "frameworks",
    "databases",
    "cloud/devops",
    "design & tools",
  ];
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills
    .filter(
      (skill) => activeCategory === "all" || skill.category === activeCategory
    )
    .sort((a, b) => b.level - a.level);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className={cn("flex flex-wrap justify-center gap-4 mb-12")}>
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill, key) => (
          <div
            key={key}
            className="bg-card p-6 rounded-lg shadow-xs card-hover"
          >
            <div className="text-left mb-4">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
              <div
                className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                style={{ width: skill.level + "%" }}
              ></div>
            </div>
            <div className="text-right mt-1">
              <span className="text-sm text-muted-foreground ">
                {skill.level}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
