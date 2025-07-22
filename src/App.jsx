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
              My content aims to deliver high-quality and immersive gameplay experiences. Whether it's flying complex operations in ARMA or conducting high-stakes raids in Ready or Not, I strive to create content that engages viewers across all devices—phones, tablets, and desktops.
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
                  href="https://www.youtube.com/@yourchannel"
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
                  href="https://twitch.tv/yourtwitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Twitch Channel
                </a>
              </li>
            </ul>
            <div className="flex gap-4 text-2xl">
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer"><FaYoutube /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://twitch.tv/yourtwitch" target="_blank" rel="noopener noreferrer"><FaTwitch /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://discord.gg/yourdiscord" target="_blank" rel="noopener noreferrer"><FaDiscord /></motion.a>
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
            <h1 className="text-3xl font-bold mb-2">Welcome to My Website</h1>
            <p className="text-lg">
              Explore more about who I am, my tactical content, and where you can find me across all platforms.
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
          src="https://example.com/logo.png"
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
        <p>© {new Date().getFullYear()} YourName. All rights reserved.</p>
        <p>All content and material on this website are protected under copyright law and may not be reproduced without permission.</p>
        <p>Background music: "Night Horizon" by Kevin MacLeod via Pixabay — royalty-free and free to use.</p>
      </footer>
    </div>
  );
}
