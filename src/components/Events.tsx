import { useState } from "react";
import {
  Code,
  Zap,
  ShieldCheck,
  Sparkles,
  BookOpen,
  FlaskConical,
  Activity,
  Building2, // ✅ Added missing icon
  X,
} from "lucide-react";
import Navbar from "./Navbar";

interface EventHead {
  name: string;
  contact: string;
}

interface Event {
  title: string;
  description: string;
  icon: string;
  duration: string;
  format: string;
  poster: string;
  scoring: string[];
  rules: string[];
  platform: string;
  entry_fee: string;
  prizes: string[];
  event_head: EventHead;
}

interface Category {
  category_title: string;
  events: Event[];
}

const iconMap = {
  Code,
  Zap,
  ShieldCheck,
  Sparkles,
  BookOpen,
  FlaskConical,
  Activity,
  Building2, // ✅ Added to map
};

const eventData: Category[] = [
  {
    category_title: "Programming & Tech",
    events: [
      {
        title: "CPCT (Coding Competition)",
        description:
          "A programming challenge to test your coding logic, speed, and problem-solving accuracy.",
        icon: "Code",
        duration: "5 (2+3) hours",
        format: "Individual",
        platform: "Codeforces (In LAB)",
        entry_fee: "₹49",
        poster: "/images/events/cp_poster.jpeg",
        scoring: [
          "Based on number of correct solutions",
          "Time and accuracy used as tie-breakers",
        ],
        rules: [
          "No plagiarism or collaboration allowed",
          "Internet restricted to official platform",
          "Violation of rules leads to disqualification",
        ],
        prizes: ["Cash prizes and exciting goodies"],
        event_head: {
          name: "Nikhil Singh",
          contact: "9873988194",
        },
      },
      {
        title: "Web Genesis (Web Developement hackathon)",
        description:
          "A creative web development challenge where teams design functional, theme-based websites.",
        icon: "Zap",
        duration: "48 hours (48h build(at your place) + showcase(at the venue))",
        format: "Teams of 2",
        platform: "Local / Browser-based",
        entry_fee: "₹99",
        poster: "/images/events/typing_poster.jpeg",
        scoring: [
          "Creativity and originality",
          "Theme resemblance and responsiveness",
          "Functionality and visual polish",
        ],
        rules: [
          "Themes will be revealed 48 hours before the event.",
          "You'll bring your built solutions, which will be evaluated on the aforementioned parameters.",
          "AI tools and internet allowed",
          "Copied or template-based work leads to disqualification",
        ],
        prizes: ["Cash prizes and exciting goodies"],
        event_head: {
          name: "Ashutosh Mishra",
          contact: "9454751887",
        },
      },
      {
        title: "CipherConquest (CTF Challenge)",
        description:
          "Capture-the-Flag event where players solve cybersecurity puzzles to earn points.",
        icon: "ShieldCheck",
        duration: "3 hours",
        format: "Individual",
        platform: "CTF Platform",
        entry_fee: "Free",
        poster: "/images/events/cipher_conquest.jpeg",
        scoring: [
          "Number of flags solved",
          "Time-based ranking for tie-breaks",
        ],
        rules: [
          "Flag sharing strictly prohibited",
          "Respectful environment mandatory",
          "Report unintended vulnerabilities to organizers",
        ],
        prizes: ["Cash prizes and exciting goodies"],
        event_head: {
          name: "Aman Singh",
          contact: "9039308629",
        },
      },
      {
        title: "TypeMatrix",
        description:
          "A typing speed and accuracy contest to test precision under time pressure.",
        icon: "Activity",
        duration: "1 hour (including setup)",
        format: "Individual",
        platform: "Official Techmart Typing Platform",
        entry_fee: "₹49",
        poster: "/images/events/typing_poster.jpeg",
        scoring: [
          "Final Score = (WPM × Accuracy) / 100",
          "Higher accuracy wins tie-breakers",
        ],
        rules: [
          "Only registered participants allowed",
          "External typing tools/scripts prohibited",
          "Plagiarism or tab switching = disqualification",
        ],
        prizes: ["Cash prizes and exciting goodies"],
        event_head: {
          name: "Khushi Singh Parihar",
          contact: "9005893880",
        },
      },
    ],
  },
  {
    category_title: "Chemistry & Science",
    events: [
      {
        title: "ChemVenture (Presentation Competition)",
        description:
          "A professional-skill-based presentation event for chemistry enthusiasts to showcase innovative ideas.",
        icon: "BookOpen",
        duration: "10 minutes (8 min presentation + 2 min Q&A)",
        format: "Teams of 2",
        platform: "Offline (CM311)",
        entry_fee: "₹49 per participant",
        poster: "/images/events/chem_venture.png",
        scoring: [
          "Content quality and visuals",
          "Delivery and professionalism",
        ],
        rules: [
          "Teams of 2 only",
          "Exceeding time leads to penalty",
          "Judges’ decision is final",
        ],
        prizes: ["₹1000 or exciting goodies"],
        event_head: {
          name: "Ansh sharma",
          contact: "9451203397",
        },
      },
      {
        title: "Mystery Flask (Chemistry Challenge)",
        description:
          "A fun chemistry-based lab challenge where teams must solve experimental tasks.",
        icon: "FlaskConical",
        duration: "TBD",
        format: "Teams of 2",
        platform: "Offline (Chem Lab)",
        entry_fee: "₹49 per person",
        poster: "/images/events/mystry_flask.png",
        scoring: ["Performance in tasks", "Accuracy and teamwork"],
        rules: [
          "Handle materials responsibly",
          "Arrive 20 minutes early",
          "College ID mandatory",
        ],
        prizes: ["trophies and certificates"],
        event_head: {
          name: "Akharw mishra",
          contact: "9236797959",
        },
      },
      {
        title: "CHEMCAD Workshop (IIChE Collaboration)",
        description:
          "A professional workshop introducing participants to CHEMCAD for chemical process simulation.",
        icon: "BookOpen",
        duration: "TBD",
        format: "Individual / Team of 2",
        platform: "Offline (UIET Campus)",
        entry_fee: "₹149 per person",
        poster: "/images/events/chem_cad.jpeg",
        scoring: ["Participation only (certificate awarded)"],
        rules: [
          "Maintain discipline and decorum",
          "Carry college ID",
          "Misconduct may lead to suspension",
        ],
        prizes: ["Participation certificates for all"],
        event_head: {
          name: "Ambar pandey",
          contact: "7565952518",
        },
      },
    ],
  },
  {
    category_title: "Design & Creativity",
    events: [
      {
        title: "Jewellery Design – Adorn the Idea",
        description:
          "A design contest to create handmade wearable jewelry based on a given theme.",
        icon: "Sparkles",
        duration: "2 hrs",
        format: "Individual",
        platform: "Offline (Display)",
        entry_fee: "₹100",
        poster: "/images/events/jwellery_desgin.jpg",
        scoring: ["Creativity and theme relevance", "Craftsmanship and neatness"],
        rules: [
          "Only allowed materials permitted",
          "Desgin any wearable jwellery peice",
          "No pre-made or digital designs",
          "Brief concept note submission required",
        ],
        prizes: ["₹3000 or exciting goodies"],
        event_head: {
          name: "Nikita verma",
          contact: "9555234521",
        },
      },
      {
        title: "Logo Design (Hand-drawn on Paper)",
        description:
          "A creative design contest where participants craft original hand-drawn logos based on an assigned theme. The focus is on simplicity, creativity, and originality—without digital tools or software.",
        icon: "Sparkles",
        duration: "TBD",
        format: "Individual",
        platform: "Offline (Hand-drawn on paper)",
        entry_fee: "₹100",
        poster: "/images/events/logo_design.jpeg",
        scoring: [
          "Creativity and relevance to the assigned theme",
          "Originality and clarity of concept",
          "Neatness and presentation quality",
        ],
        rules: [
          "Design must be made only on the assigned theme.",
          "No use of digital tools or software; hand-drawn entries only.",
          "Maintain simplicity and creativity in design.",
        ],
        prizes: ["₹3000 or exciting goodies"],
        event_head: {
          name: "Mohd Azfar",
          contact: "+91 7379196862",
        },
      },
      {
        title: "Structure Tower Challenge – Build to the Sky",
        description:
          "A fun and creative design challenge where participants construct the tallest and most stable freestanding tower using only the materials provided. The event tests your sense of structure, balance, creativity, and teamwork.",
        icon: "Building2",
        duration: "45–60 minutes",
        format: "Individual or Team (up to 4 members)",
        platform: "Offline (On-site Competition)",
        entry_fee: "₹100",
        poster: "/images/events/structure_tower_challenge.jpg",
        scoring: [
          "Height of the structure",
          "Stability and strength",
          "Creativity and design aesthetics",
          "Teamwork and planning",
        ],
        rules: [
          "You can participate alone or in a team of up to 4 members.",
          "All materials will be provided by organizers. Outside materials or tools are not allowed.",
          "You will get 45–60 minutes to build your tower.",
          "The tower must be free-standing (should stand on its own). Only provided materials may be used.",
        ],
        prizes: [
          "Winning Categories: Tallest Tower, Most Creative Design, Most Stable Structure",
          "₹2000 or exciting goodies",
        ],
        event_head: {
          name: "Parnika",
          contact: "8090033330",
        },
      },
    ],
  },
];

const gradients = [
  "from-cyan-500 to-blue-600",
  "from-purple-500 to-pink-500",
  "from-amber-400 to-orange-500",
  "from-green-500 to-emerald-600",
  "from-red-500 to-rose-600",
  "from-indigo-500 to-violet-600",
];

function Events() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const getGradient = (i: number) => gradients[i % gradients.length];

  return (
    <div className="min-h-screen bg-[#0b0c10] py-16 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="text-center mb-16">
        <h1 className="font-orbitron text-6xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
          EVENTS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto">
        {eventData.map((cat, ci) => (
          <div key={ci} className="mb-20">
            <h2
              className={`font-orbitron text-3xl font-bold mb-8 bg-gradient-to-r ${getGradient(
                ci
              )} bg-clip-text text-transparent`}
            >
              {cat.category_title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.events.map((ev, ei) => {
                const Icon = iconMap[ev.icon as keyof typeof iconMap];
                const gradient = getGradient(ci + ei);
                return (
                  <div
                    key={ei}
                    onClick={() => setSelectedEvent(ev)}
                    className="group relative cursor-pointer hover:scale-105 transition-transform duration-300"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all`}
                    />
                    <div className="relative bg-gray-900/70 border border-gray-800 rounded-2xl p-6 backdrop-blur-xl hover:border-cyan-500/50 transition-all h-full">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-orbitron text-white mb-2">
                        {ev.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {ev.description}
                      </p>
                      <div className="flex gap-3 text-xs text-cyan-300">
                        <span className="bg-gray-800/50 px-3 py-1 rounded-full">
                          {ev.duration}
                        </span>
                        <span className="bg-gray-800/50 px-3 py-1 rounded-full">
                          {ev.format}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gray-900 border border-cyan-500/40 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-red-500/20 hover:bg-red-500/40 border border-red-500 rounded-full transition-all duration-200"
            >
              <X className="w-5 h-5 text-red-400" />
            </button>

            {/* Poster */}
            <div className="w-full bg-gray-800 rounded-t-3xl overflow-hidden">
              <img
                src={selectedEvent.poster}
                alt={selectedEvent.title}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-8 space-y-6">
              <h2 className="font-orbitron text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {selectedEvent.title}
              </h2>
              <p className="text-gray-300">{selectedEvent.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Detail label="Duration" value={selectedEvent.duration} />
                <Detail label="Format" value={selectedEvent.format} />
                <Detail label="Platform" value={selectedEvent.platform} />
                <Detail label="Entry Fee" value={selectedEvent.entry_fee} />
              </div>

              <Section title="Prizes" data={selectedEvent.prizes} />
              <Section title="Scoring Criteria" data={selectedEvent.scoring} />
              <Section title="Rules & Guidelines" data={selectedEvent.rules} />

              <div className="border-t border-gray-700 pt-4">
                <p className="font-orbitron text-lg text-cyan-400">Event Head</p>
                <p className="text-white">{selectedEvent.event_head.name}</p>
                <p className="text-gray-400">{selectedEvent.event_head.contact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-gray-800/60 border border-gray-700 rounded-xl p-4">
    <p className="text-cyan-400 font-orbitron text-sm">{label}</p>
    <p className="text-white">{value}</p>
  </div>
);

const Section = ({ title, data }: { title: string; data: string[] }) => (
  <div>
    <h3 className="font-orbitron text-xl text-cyan-400 mb-3">{title}</h3>
    <ul className="space-y-2 text-gray-300 text-sm">
      {data.map((d, i) => (
        <li key={i} className="flex gap-2 items-start">
          <span className="text-cyan-400">▹</span>
          {d}
        </li>
      ))}
    </ul>
  </div>
);

export default Events;
