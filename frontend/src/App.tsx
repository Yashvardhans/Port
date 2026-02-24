import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies";
import Technologies2 from "./components/Technologies/Technologies2";
import Project2 from "./components/Projects2/Project2";
import Chat from "./components/Chat/Chat";

import Loader from "./components/Loader/Loader";

import { SectionType } from "./types";

import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState<SectionType>("Banner");

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const images = Array.from(document.images);

    let loadedCount = 0;

    const minTime = new Promise(
      (res) => setTimeout(res, 700), // minimum loader time
    );

    const imagesLoaded = new Promise<void>((resolve) => {
      if (images.length === 0) resolve();

      const onLoad = () => {
        loadedCount++;
        if (loadedCount === images.length) resolve();
      };

      images.forEach((img) => {
        if (img.complete) onLoad();
        else {
          img.addEventListener("load", onLoad);
          img.addEventListener("error", onLoad);
        }
      });
    });

    Promise.all([minTime, imagesLoaded]).then(() => setLoading(false));
  }, []);
  const renderSection = () => {
    switch (activeSection) {
      case "Banner":
        return <Banner  setActiveSection={setActiveSection}/>;
      case "About":
        return <About />;
      case "Technologies":
        return <Technologies2 />;
      case "Projects":
        return <Project2 />;
      case "Contact":
        return <Contact />;
      default:
        return <Banner setActiveSection={setActiveSection} />;
    }
  };

  /* 🔥 Show loader first */
  if (loading) return <Loader />;

  return (
    <div className="App">
      <Navbar setActiveSection={setActiveSection} />

      <div className="all_contents">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      <Chat />
    </div>
  );
}

export default App;
