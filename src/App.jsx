import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaTwitch, FaTwitter, FaDiscord } from "react-icons/fa";
import "./stars.css";

// Simple Button component (replaces the missing UI Button import)
const Button = ({ children, onClick, variant }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded transition ${
      variant === "outline"
        ? "border border-gray-500 hover:bg-gray-600"
        : "bg-blue-600 text-white"
    }`}
  >
    {children}
  </button>
);

const sections = {
  home: "Home",
  about: "About Me",
  info: "Information",
  links: "Links",
  
};

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false); // music paused by default
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.25;
      audioRef.current.loop = true;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4"
          >
            <h2 className="text-2xl font-bold mb-2">About Me</h2>
            <p>
              I am a content creator who enjoys making content for others enjoyment my core content is mostly Arma Reforger based content and more games as time goes on!
            </p>
          </motion.div>
        );
      case "info":
        return (
          <motion.div
            key="info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4"
          >
            <h2 className="text-2xl font-bold mb-2">Information</h2>
            <p>
              Some Information about myself, I am a former student from a computer tech class who enjoys making websites and programming things. I have done this for 3-4 years. My content on youtube strives to be the highest quality that I can produce and someday it will gain popularity. I do try to respond to all of my fans in the comments and love support.
            </p>
          </motion.div>
        );
      case "links":
        return (
          <motion.div
            key="links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4"
          >
            <h2 className="text-2xl font-bold mb-2">Links</h2>
            <ul className="list-disc list-inside mb-4">
              <li>
                <a
                  href="https://www.youtube.com/@Arpilotyt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  My YouTube Channel
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@armapilot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Arma Pilots Channel
                </a>
              </li>
              <li>
                <a
                  href="https://twitch.tv/arpilotyt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Twitch Channel
                </a>
              </li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.youtube.com/@Arpilotyt" target="_blank" rel="noopener noreferrer"><FaYoutube /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://twitch.tv/arpilotyt" target="_blank" rel="noopener noreferrer"><FaTwitch /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://discord.gg/VmqBBwkHBN" target="_blank" rel="noopener noreferrer"><FaDiscord /></motion.a>
            </div>
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4"
          >
            <h1 className="text-3xl font-bold mb-2">Welcome to my Website</h1>
            <p className="text-lg">
              On this website you can explore all of my information such as links, about me and some information about my content and what I do.
            </p>
          </motion.div>
        );
    }
  };

  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-300 relative overflow-hidden ${
        darkMode
          ? "text-gray-100 bg-black"
          : "text-gray-100 bg-gray-900"
      } ${isPlaying ? "stars-bg" : ""}`}
    >
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/download/audio/2022/07/16/audio_d7b8e5e7a4.mp3?filename=night-horizon-113135.mp3"
      />
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <img
          src="https://cdn.discordapp.com/attachments/1293670005535277067/1397029017911169034/A234A258-C0D4-4B67-BFF6-E5AD2120C47C.png?ex=6880e4e9&is=687f9369&hm=11804c3f8d15b0027e25d097c452085b96297562c2ec44544aca3592c728f0c0&"
          alt="Logo"
          className="h-12 w-auto"
        />
        <div className="flex gap-2">
          <Button onClick={() => setDarkMode(!darkMode)} variant="outline">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
          {/* Music controls temporarily disabled */}
        </div>
      </header>
      <nav className="flex flex-wrap gap-2 justify-center mb-6">
        {Object.entries(sections).map(([key, label]) => (
          <Button
            key={key}
            onClick={() => setActiveSection(key)}
            variant={activeSection === key ? "default" : "outline"}
          >
            {label}
          </Button>
        ))}
      </nav>
      <motion.div layout>{renderSection()}</motion.div>
      <footer className="mt-10 text-center text-sm opacity-70">
        <p>© {new Date().getFullYear()} ARPilotYT. All rights reserved.</p>
        <p>All content and material on this website are protected under copyright law and may not be reproduced without permission.</p>
        <p>Background music: Still being worked on.</p> {/* "Night Horizon" by Kevin MacLeod via Pixabay — royalty-free and free to use. */}
      </footer>
    </div>
  );
}
