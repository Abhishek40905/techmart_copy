import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🌐 Constant Menu Items
  const menuItems = [
    { name: "About", id: "/about" },
    { name: "Institutions", id: "/#institutions" },
    { name: "Competitions", id: "/events" },
    { name: "Schedule", id: "/#schedule" },
    { name: "Team",id:"/team"},
    { name: "Sponsors", id: "/#sponsors" },
  ];

  return (
    <header className="absolute top-4 left-0 right-0 flex justify-between items-center px-6 z-20">
      {/* 🔹 Brand / Logo */}
      <h2 className="font-audiowide text-2xl sm:text-3xl text-primary drop-shadow-lg">
        <a href="/">TechMart</a>
      </h2>

      {/* 📱 Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg bg-background/50 backdrop-blur-lg border border-primary/20 hover:bg-background/70 transition"
      >
        {menuOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </button>

      {/* 💻 Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-lg font-orbitron text-foreground/90">
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            className="hover:text-primary transition-colors"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* 📱 Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="absolute top-16 left-4 right-4 z-20 bg-background/80 backdrop-blur-lg border border-primary/20 rounded-2xl p-6 shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 text-lg font-orbitron text-foreground">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.id}
                    className="hover:text-primary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
