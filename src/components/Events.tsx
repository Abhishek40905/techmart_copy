import { useState } from "react";
import {
  Code,
  Zap,
  ShieldCheck,
  Sparkles,
  BookOpen,
  FlaskConical,
  Activity,
  Building2,
  X,
  Cpu,
  Bot,
  Recycle,
  Brain,
  Map,
} from "lucide-react";
import Navbar from "./Navbar";

// ---- TYPES ----
interface EventHead {
  name: string;
  contact: string;
}

interface Event {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
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

// ---- ICON MAP ----
const iconMap = {
  Code,
  Zap,
  ShieldCheck,
  Sparkles,
  BookOpen,
  FlaskConical,
  Activity,
  Building2,
  Cpu,
  Bot,
  Recycle,
  Brain,
  Map,
};

// ---- GRADIENT STYLES ----
const gradients = [
  "from-cyan-500 to-blue-600",
  "from-purple-500 to-pink-500",
  "from-amber-400 to-orange-500",
  "from-green-500 to-emerald-600",
  "from-red-500 to-rose-600",
  "from-indigo-500 to-violet-600",
];

// ---- EVENT ARRAYS ----
const technologyEvents: Event[] = [
  {
    title: "CPCT (Coding Competition)",
    description:
      "A programming challenge to test your coding logic, speed, and problem-solving accuracy.",
    icon: "Code",
    duration: "3 hours",
    format: "Individual",
    platform: "Online / Code Platform",
    entry_fee: "₹49",
    poster: "/images/events/cp_poster.jpeg",
    scoring: [
      "Based on number of correct solutions",
      "Time and accuracy used as tie-breakers",
    ],
    rules: [
      "No plagiarism or collaboration allowed",
      "Violation of rules leads to disqualification",
    ],
    prizes: ["₹2000 or exciting goodies"],
    event_head: { name: "Tushar Singh", contact: "9935738343" },
  },
  {
    title: "Web Dev Contest",
    description:
      "A creative web development challenge where teams design functional, theme-based websites.",
    icon: "Zap",
    duration: "5 hours (3h build + 2h showcase)",
    format: "Teams of 3–4",
    platform: "Local / Browser-based",
    entry_fee: "₹49",
    poster: "/images/events/web_dev.jpg",
    scoring: [
      "Creativity and originality",
      "Theme resemblance and responsiveness",
      "Functionality and visual polish",
    ],
    rules: [
      "Theme revealed at start of event",
      "AI tools and internet allowed",
      "Copied or template-based work not allowed",
    ],
    prizes: ["₹2000 or exciting goodies"],
    event_head: { name: "Ayushi Chaudhary", contact: "9118886404" },
  },
  {
    title: "CipherConquest (CTF Challenge)",
    description:
      "Capture-the-Flag event where players solve cybersecurity puzzles to earn points.",
    icon: "ShieldCheck",
    duration: "3 hours",
    format: "Individual",
    platform: "CTFd Platform",
    entry_fee: "Free",
    poster: "/images/events/cipher_conquest.jpeg",
    scoring: ["Number of flags solved", "Time-based ranking for tie-breaks"],
    rules: ["No flag sharing", "Respectful environment mandatory"],
    prizes: ["₹2000 or exciting goodies"],
    event_head: { name: "Aman Singh", contact: "9039308629" },
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
    scoring: ["(WPM × Accuracy) / 100", "Higher accuracy wins tie-breakers"],
    rules: [
      "Only registered participants allowed",
      "No external typing tools/scripts",
    ],
    prizes: [
      "1st Prize – ₹2000",
      "2nd Prize – ₹1500",
      "3rd Prize – ₹1000",
    ],
    event_head: { name: "Khushi Singh Parihar", contact: "9005893880" },
  },
];

const chemistryEvents: Event[] = [
  {
    title: "ChemVenture (Presentation Competition)",
    description:
      "A presentation event for chemistry enthusiasts to showcase innovative ideas.",
    icon: "BookOpen",
    duration: "10 minutes (8 min presentation + 2 min Q&A)",
    format: "Teams of 2",
    platform: "Offline (CM311)",
    entry_fee: "₹49",
    poster: "/images/events/chem_venture.png",
    scoring: ["Content quality", "Delivery and professionalism"],
    rules: ["Teams of 2 only", "Exceeding time leads to penalty"],
    prizes: ["₹2000 or exciting goodies"],
    event_head: { name: "Priya Verma", contact: "8957683450" },
  },
  {
    title: "Mystery Flask (Chemistry Challenge)",
    description:
      "A fun chemistry-based lab challenge where teams must solve experimental tasks.",
    icon: "FlaskConical",
    duration: "TBD",
    format: "Teams of 2",
    platform: "Offline (Chem Lab)",
    entry_fee: "₹49",
    poster: "/images/events/mystry_flask.png",
    scoring: ["Performance in tasks", "Accuracy and teamwork"],
    rules: ["Handle materials responsibly", "Arrive 20 minutes early"],
    prizes: ["₹2000 or exciting goodies"],
    event_head: { name: "Ankita Sharma", contact: "9578654123" },
  },
];

const roboticsEvents: Event[] = [
  {
    title: "Robo Race",
    description:
      "A thrilling robotics competition where participants design and race their robots on an obstacle track.",
    icon: "Cpu",
    duration: "TBD",
    format: "Teams of 2–5 members",
    platform: "Offline (On-site Arena)",
    entry_fee: "₹249",
    poster: "/images/events/robo_Race.jpeg",
    scoring: ["Fastest completion time", "Fewest penalties"],
    rules: ["Max 5 members", "No ready-made kits"],
    prizes: ["₹2000 or exciting goodies"],
    event_head: { name: "Shivendra Pratap Singh", contact: "8005183363" },
  },
  {
    title: "Search & Destroy (Line Follower)",
    description:
      "An autonomous robotics competition where participants design a line-following robot to navigate a maze efficiently.",
    icon: "Bot",
    duration: "5 minutes 30 seconds (Dry + Actual Run)",
    format: "Team (Max 5 members)",
    platform: "Offline (On-site Arena)",
    entry_fee: "₹249",
    poster: "/images/events/search_and_destroy.jpg",
    scoring: [
      "30 points per checkpoint",
      "30 points for completion",
      "Shortest path bonus",
    ],
    rules: ["No Lego kits", "Max 3 restarts", "Judges' decision final"],
    prizes: ["₹10000 or exciting goodies"],
    event_head: { name: "Manish Yadav", contact: "7985893822" },
  },
];

const designEvents: Event[] = [
  {
    title: "Popsicle Stick Bridge Competition",
    description:
      "Design and construct a bridge entirely from popsicle sticks, testing engineering skill and creativity.",
    icon: "Building2",
    duration: "2 Days (180 Minutes total)",
    format: "Team of up to 4",
    platform: "Offline",
    entry_fee: "₹200 per Team",
    poster: "/images/events/pop_sicle.jpeg",
    scoring: ["Load capacity", "Structural stability", "Design aesthetics"],
    rules: ["Use only provided materials", "Maintain safety standards"],
    prizes: ["1st – ₹3000", "2nd – ₹2000", "3rd – ₹1000"],
    event_head: { name: "Sudheer Tiwari", contact: "7607672742" },
  },
  {
    title: "Jewellery Making (Eco-Friendly Theme)",
    description:
      "Create handmade jewellery using eco-friendly or recycled materials showcasing sustainability through art.",
    icon: "Sparkles",
    duration: "90 minutes",
    format: "Individual / Team of 2",
    platform: "Offline",
    entry_fee: "₹100",
    poster: "/images/events/jwellery_desgin.jpg",
    scoring: ["Creativity", "Theme relevance", "Neatness"],
    rules: ["Use eco-friendly materials only"],
    prizes: ["1st – ₹2000", "2nd – ₹1500"],
    event_head: { name: "Muskan Sharma", contact: "9452263487" },
  },
  {
    title: "Structure Tower Challenge – Build to the Sky",
    description:
      "Build the tallest and most stable tower using only the provided materials.",
    icon: "Building2",
    duration: "45–60 minutes",
    format: "Individual or Team (up to 4)",
    platform: "Offline",
    entry_fee: "₹100",
    poster: "/images/events/build_to_the_sky.jpeg",
    scoring: ["Height", "Stability", "Design", "Teamwork"],
    rules: ["Freestanding tower only", "No external materials"],
    prizes: ["₹2000 or exciting goodies"],
    event_head: {
      name: "Mohd Athar & Parnika Dwivedi",
      contact: "+91 80900 33330",
    },
  },
];

const funEvents: Event[] = [
  {
    title: "Mind Masters (Chess Tournament)",
    description:
      "A chess tournament testing focus, logic, and strategy. Separate categories for Boys and Girls.",
    icon: "Brain",
    duration: "10 minutes + 5 seconds increment per player",
    format: "Individual",
    platform: "Offline / Online",
    entry_fee: "₹49",
    poster: "/images/events/chess.jpeg",
    scoring: [],
    rules: [],
    prizes: ["Chess boards and medals for winners"],
    event_head: { name: "Vineet Singh Rajput", contact: "7275033235" },
  },
  {
    title: "The Hidden Trail (Treasure Hunt)",
    description:
      "Solve clues and follow trails across the campus in this adventurous treasure hunt.",
    icon: "Map",
    duration: "1–2 hours",
    format: "Team of 2–4",
    platform: "Offline (UIET Campus)",
    entry_fee: "Free",
    poster: "/images/events/treasure_hunt.jpeg",
    scoring: [],
    rules: [],
    prizes: ["Exciting gifts and certificates"],
    event_head: { name: "—", contact: "—" },
  },
];

const workshopEvents: Event[] = [
  {
    title: "CHEMCAD Workshop (IIChE Collaboration)",
    description:
      "A hands-on workshop introducing participants to CHEMCAD for chemical process simulation.",
    icon: "BookOpen",
    duration: "TBD",
    format: "Individual / Team of 2",
    platform: "Offline (UIET Campus)",
    entry_fee: "₹49",
    poster: "/images/events/chem_cad.jpeg",
    scoring: ["Participation only"],
    rules: [],
    prizes: ["Certificates for all participants"],
    event_head: { name: "Vishal Kumar", contact: "8319043568" },
  },
];

// ---- COMBINED DATA ----
const eventData: Category[] = [
  { category_title: "Technology", events: technologyEvents },
  { category_title: "Chemistry & Science", events: chemistryEvents },
  { category_title: "Robotics", events: roboticsEvents },
  { category_title: "Design & Creativity", events: designEvents },
  { category_title: "Games & Fun Events", events: funEvents },
  { category_title: "Workshops", events: workshopEvents },
];

// ---- MAIN COMPONENT ----
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
                const IconComponent = iconMap[ev.icon];
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
                        <IconComponent className="w-7 h-7 text-white" />
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

      {/* ---- MODAL ---- */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gray-900 border border-cyan-500/40 rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-red-500/20 hover:bg-red-500/40 border border-red-500 rounded-full transition-all duration-200"
            >
              <X className="w-5 h-5 text-red-400" />
            </button>

            {/* Scrollable container */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-start p-6 md:p-10 max-h-[85vh] overflow-y-auto">
              {/* Left */}
              <div className="space-y-6 overflow-y-auto md:max-h-[75vh] pr-2">
                <h2 className="font-orbitron text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {selectedEvent.title}
                </h2>
                <p className="text-gray-300">{selectedEvent.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Detail label="Duration" value={selectedEvent.duration} />
                  <Detail label="Format" value={selectedEvent.format} />
                  <Detail label="Platform" value={selectedEvent.platform} />
                  <Detail label="Entry Fee" value={selectedEvent.entry_fee} />
                </div>

                <Section title="Prizes" data={selectedEvent.prizes} />
                <Section title="Scoring Criteria" data={selectedEvent.scoring} />
                <Section title="Rules & Guidelines" data={selectedEvent.rules} />

                <div className="border-t border-gray-700 pt-4">
                  <p className="font-orbitron text-lg text-cyan-400">
                    Event Head
                  </p>
                  <p className="text-white">
                    {selectedEvent.event_head.name}
                  </p>
                  <p className="text-gray-400">
                    {selectedEvent.event_head.contact}
                  </p>
                </div>
              </div>

              {/* Right (Poster) */}
              <div className="w-full h-full flex justify-center items-center bg-gray-800 rounded-2xl border border-gray-700 shadow-lg overflow-auto md:max-h-[75vh]">
                <img
                  src={selectedEvent.poster}
                  alt={selectedEvent.title}
                  className="object-contain w-full h-auto md:h-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---- SUBCOMPONENTS ----
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
      {data.length === 0 ? (
        <li className="text-gray-500 italic">No data available</li>
      ) : (
        data.map((d, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-cyan-400">▹</span>
            {d}
          </li>
        ))
      )}
    </ul>
  </div>
);

export default Events;
