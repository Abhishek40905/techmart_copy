import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "./Navbar";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    {
      title: "About TechMart",
      image: null,
      text: `“TECHMART 2025” is the Annual Technical Fest of University Institute of Engineering and 
Technology (UIET), CSJMU Kanpur, organized with the vision to encourage innovation, technical excellence, and interdisciplinary collaboration among students.

This two-day celebration of technology and creativity aims to bringhow to keep a string as it is  together students from all departments to showcase their technical skills, present innovations, and participate in intellectually stimulating events.

Objectives:
• To promote technical innovation and hands-on learning among students. 
• To encourage cross-department collaboration and idea exchange. 
• To provide a platform for showcasing projects, models, and creative ideas. 
• To strengthen industry-academia engagement through exposure and participation. 
• To foster a culture of technology-driven problem-solving.`,
    },
    {
      title: "About CSJMU",
      image: "/images/csjm.jpeg",
      text: `Chhatrapati Shahu Ji Maharaj University (CSJMU), Kanpur, is a leading institution of higher education in Uttar Pradesh, named after the great social reformer Rajarshi Shahu Maharaj. The university fosters an inclusive learning environment that encourages innovation, knowledge, and holistic development.

Guided by the visionary ideals of Shahu Maharaj—who championed education, equality, and social reform—CSJMU stands as a symbol of progress and empowerment. From free primary education to promoting women’s rights and modernizing agriculture, his legacy continues to inspire generations.

Today, CSJMU continues this tradition by nurturing talent, promoting research, and shaping responsible global citizens.`,
    },
    {
      title: "About UIET",
      image: "/images/uiet.jpeg",
      text: `The University Institute of Engineering and Technology (UIET), a flagship institute of CSJM University Kanpur, is dedicated to advancing technical education and innovation. Located on the lush 264-acre campus, UIET offers B.Tech programs in five major branches along with MCA, PG Diploma, and vocational courses.

With academic autonomy, an industry-aligned curriculum, and highly qualified faculty, UIET fosters innovation, entrepreneurship, and holistic student growth through academics, research, and cultural engagement.`,
    },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-background text-foreground" id="about">
      {/* 🌈 Background Effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 2 === 0
                  ? "hsla(189, 100%, 50%, 0.08)"
                  : "hsla(312, 100%, 50%, 0.08)"
              } 0%, transparent 70%)`,
              left: `${10 + i * 18}%`,
              top: `${8 + i * 12}%`,
            }}
            animate={{ x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <Navbar />

      <div className="relative container mx-auto px-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col items-center gap-12 mb-32 text-center`}
          >
            {/* 🖼️ Optional Image */}
            {section.image && (
              <div className="w-full md:w-1/2">
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-3xl shadow-2xl w-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            )}

            {/* 📝 Text Section */}
             <h2 className="text-5xl md:text-6xl font-orbitron mb-8 gradient-text text-center">
                {section.title}
              </h2>
            <div
              className={`${
                section.image ? "w-full md:w-1/2" : "max-w-4xl mx-auto text-left md:text-center"
              }`}
            >
             

              {section.title === "About TechMart" ? (
                <div className="bg-background/40 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-lg border border-primary/20">
                  <pre className="whitespace-pre-wrap text-lg md:text-xl text-muted-foreground leading-relaxed font-sans text-left">
                    {section.text}
                  </pre>
                </div>
              ) : (
                <pre className="text-lg md:text-xl text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans">
                  {section.text}
                </pre>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
