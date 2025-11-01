import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";

const categories = [
  {
    title: " Core Organizers",
    gradient: "from-cyan-400 to-blue-500",
    members: [
      { name: "Nikil", role: "IT", image: "/images/organizers/nikhil.jpeg" },
      { name: "Shikhar Dwivedi", role: "CSE", image: "/images/organizers/shikhar.jpeg" },
      { name: "Jatin Gupta", role: "MCA", image: "/images/organizers/jatin.jpeg" },
    ],
  },
  {
    title: " Technical & Innovation Team",
    gradient: "from-teal-400 to-emerald-500",
    members: [
      { name: "Vishal Singh", role: "ECE", image: "/images/organizers/vishal.jpeg" },
      { name: "Nav Srijan", role: "CSE-AI", image: "/images/organizers/nav.jpeg" },
    ],
  },
  {
    title: " Creative & Design Team",
    gradient: "from-pink-400 to-rose-500",
    members: [
      { name: "Mohd Athar", role: "B.Design", image: "/images/organizers/athar.jpeg" },
      { name: "Sanskriti Srivastava", role: "B.Voc", image: "/images/organizers/sanskriti.jpeg" },
    ],
  },
  {
    title: " Management & Operations Team",
    gradient: "from-violet-400 to-purple-500",
    members: [
      { name: "Shivam Pal", role: "CHE", image: "/images/organizers/shivam.jpeg" },
      { name: "Divyaraaj Tomar", role: "MEE", image: "/images/organizers/divyaraaj.jpeg" },
    ],
  },
  {
    title: " Outreach & PR Team",
    gradient: "from-orange-400 to-amber-500",
    members: [
      { name: "Shivani Shukla", role: "IT", image: "/images/organizers/shivani.jpeg" },
    ],
  },
];

export default function Teams() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen px-6 sm:px-12 lg:px-20 py-20 bg-gradient-to-b from-background via-[#0a0a0a] to-background text-center"
    >
      <Navbar/>
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-orbitron font-extrabold gradient-text mb-16"
      >
        Our Team
      </motion.h2>

      {categories.map((category, idx) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: idx * 0.15 }}
          className="mb-24"
        >
          <h3
            className={`text-4xl md:text-5xl font-orbitron mb-12 text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}
          >
            {category.title}
          </h3>

          {/* Responsive Centered Layout */}
          <div className="flex flex-wrap justify-center gap-10 sm:gap-12">
            {category.members.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-center w-64"
              >
                <div className="relative overflow-hidden rounded-3xl border border-primary/30 shadow-md hover:shadow-primary/30 transition-all duration-300 mx-auto">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-72 object-cover object-top rounded-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-all duration-300" />
                </div>
                <h4 className="text-2xl font-semibold mt-4 text-foreground">
                  {member.name}
                </h4>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </section>
  );
}
