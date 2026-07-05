import React from 'react';
import AdvisoryCard from "./AdvisoryCard";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Advisory = () => {
  const AdvisoryCards = [
    {
      src: "/akhil.jpg",
      name: "Akhil Menon M",
      linkedin: "https://www.linkedin.com/in/akhil-m3non/",
      github: "https://github.com/muuduuu"
    },
    {
      src: "/hari blow.jpg",
      name: "Hari G Narayan",
      linkedin: "http://www.linkedin.com/in/hari-narayan-629867248",
      github: "https://github.com/Hari-with-an-i"
    },
    {
      src: "/gps 2.jpg",
      name: "Gowri P Shenoy",
      linkedin: "https://www.linkedin.com/in/gowri-shenoy-676100284",
      github: "https://github.com/Locateme-GPS"
    },
    {
      src: "/ajan.jpg",
      name: "Ajan S",
      linkedin: "https://www.linkedin.com/in/ajan-s",
      github: "https://github.com/ajan421"
    },
    {
      src: "/lokesh.jpg",
      name: "Lokesh Yarramallu",
      linkedin: "https://www.linkedin.com/in/lokeshyarramallu/",
      github: "https://github.com/LokeshYarramallu"
    },
    {
      src: "/surya.jpeg",
      name: "Surya Kiran",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav",
      github: "https://github.com/Suryakiran071"
    },
    {
      src: "/Navneeth.jpeg",
      name: "Navneeth N",
      linkedin: "https://www.linkedin.com/in/navaneeth-n-817658271/",
      github: "https://github.com/navth"
    },
  

  ];

  return (
    <section className="section-panel">
      <div className="mb-10 text-center">
        <div className="eyebrow">Guidance</div>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-3"
        >
          <span className="text-accent">Alumni </span> Advisory
        </motion.h2>
        <p className="mx-auto max-w-2xl text-white/60">
          Alumni mentors who help the chapter sharpen projects, events, and student growth.
        </p>
      </div>
      <div className="responsive-people-grid">
        {AdvisoryCards.map((student, index) => (
          <AdvisoryCard
            key={index}
            src={student.src}
            name={student.name}
            linkedin={student.linkedin}
            github={student.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Advisory;
