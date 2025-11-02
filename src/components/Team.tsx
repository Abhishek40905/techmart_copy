import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";

const categories = [
  {
    title: "Organizing Committee",
    gradient: "from-cyan-400 to-blue-500",
    members: [
      { name: "Shikhar Dwivedi", role: "Student Convener (CSE - 3rd Year)", image: "/images/organizers/shikhar.jpeg" },
      { name: "Nikhil Kumar", role: "Student General Secretary (IT - 3rd Year)", image: "/images/organizers/nikhil.jpeg" },
      { name: "Vaishnavi Pal", role: "Student Joint Secretary (CHE - 2nd Year)", image: "/images/organizers/vaishnavi_pal.jpeg" },
      { name: "Tarun Rai", role: "Student Treasurer (CSE - 3rd Year)", image: "/images/organizers/tarun_rai.jpeg" },
    ],
  },
  {
    title: "Computer Events Committee",
    gradient: "from-cyan-400 to-sky-500",
    members: [
      { name: "Jatin Gupta", role: "Secretary (MCA - 1st Year)", image: "/images/organizers/jatin.jpeg" },
      { name: "Nav Srijan", role: "Secretary (AI - 3rd Year)", image: "/images/organizers/nav.jpeg" },
    ],
  },
  {
    title: "Electronics Events Committee",
    gradient: "from-green-400 to-lime-500",
    members: [
      { name: "Vishal Singh", role: "Secretary (ECE - 3rd Year)", image: "/images/organizers/vishal.jpeg" },
    ],
  },
  {
    title: "Management Committee",
    gradient: "from-violet-400 to-purple-500",
    members: [
      { name: "Anshul Rana", role: "Secretary (CSE - 3rd Year)", image: "/images/organizers/anshul.jpeg" },
    ],
  },
  {
    title: "Technical Committee",
    gradient: "from-teal-400 to-emerald-500",
    members: [
      { name: "Naman Singh", role: "Secretary (AI - 3rd Year)", image: "/images/organizers/naman_singh.jpeg" },
      { name: "Nivesh Pratap Singh", role: "Secretary (AI - 3rd Year)", image: "/images/organizers/nivesh.jpeg" },
    ],
  },
  {
    title: "Inauguration & Valedictory Committee",
    gradient: "from-amber-400 to-yellow-500",
    members: [
      { name: "Shivani Shukla", role: "Secretary (IT - 3rd Year)", image: "/images/organizers/shivani.jpeg" },
      { name: "Arpan Singh", role: "Secretary (CSE - 3rd Year)", image: "/images/organizers/arpan.jpeg" },
    ],
  },
  
  
  {
    title: "Chemical Events Committee",
    gradient: "from-blue-400 to-indigo-500",
    members: [
      { name: "Harsh Katiyar", role: "Head (CHE - 2nd Year)", image: "/images/organizers/harsh.jpeg" },
    ],
  },
  {
    title: "Mechanical Events Committee",
    gradient: "from-rose-400 to-red-500",
    members: [
      { name: "Divyaraj Tomar", role: "Secretary (MEE - 3rd Year)", image: "/images/organizers/divyaraaj.jpeg" },
    ],
  },
  {
    title: "MSME Events Committee",
    gradient: "from-indigo-400 to-purple-500",
    members: [
      { name: "Lucky Kumar", role: "Secretary (MSME - 2nd Year)", image: "/images/organizers/lucky.jpeg" },
    ],
  },
  {
    title: "B.Voc. Events Committee",
    gradient: "from-pink-400 to-rose-500",
    members: [
      { name: "Mohd. Athar", role: "Secretary (B.Des. - 1st Year)", image: "/images/organizers/athar.jpeg" },
    ],
  },
  {
    title: "Sponsorship & Outreach Committee",
    gradient: "from-orange-400 to-amber-500",
    members: [
      { name: "Ojasva Raj", role: "Secretary (CSE - 3rd Year)", image: "/images/organizers/ojasva.jpeg" },
      { name: "Chanchal", role: "Secretary (B.Voc. - 1st Year)", image: "/images/organizers/chanchal.jpeg" },
    ],
  },
  {
    title: "Media & PR Committee",
    gradient: "from-yellow-400 to-orange-500",
    members: [
      { name: "Satish Kr. Sharma", role: "Secretary (CSE - 2nd Year)", image: "/images/organizers/satish.jpeg" },
    ],
  },
  {
    title: "Creativity & Decoration Committee",
    gradient: "from-pink-400 to-fuchsia-500",
    members: [
      { name: "Sanskriti Srivastava", role: "Secretary (B.Des. - 2nd Year)", image: "/images/organizers/sanskriti.jpeg" },
    ],
  },
  {
    title: "Discipline Committee",
    gradient: "from-red-400 to-rose-500",
    members: [
      { name: "Madhusudan Dubey", role: "Secretary (MCA - 1st Year)", image: "/images/organizers/madhusudhan_dubey.jpeg" },
      { name: "Abhay Kr. Kanaujiya", role: "Secretary (MCA - 1st Year)", image: "/images/organizers/abhay.jpeg" },
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
