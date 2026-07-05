import React from 'react';
import FacultyCards from "./FacultyCards";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const FacultyManagement = () => {
  const facultyCards = [
    {
      src: "/Jyothishanair.jpg",
      name: "Dr. Jyothisha Nair",
      position: "Chairperson",
    },
    {
      src: "/Swaminathanj.jpg",
      name: "Dr. Swaminathan J",
      position: "Executive Committee Member",
    },
    {
      src: "/Binupk.jpg",
      name: "Mr. P.K Binu",
      position: "Faculty Sponsor",
    },
    {
      src: "/Geethamam.jpg",
      name: "Dr. Geetha M",
      position: "Executive Committee Member",
    },
    {
      src: "/Gopakumarg.jpg",
      name: "Dr. Gopakumar G",
      position: "Executive Committee Member",
    },
    {
      src: "/Lakshmi_mam.jpg",
      name: "Dr. Lekshmi S. Nair",
      position: "Executive Committee Member",
    },
    {
      src: "/shalu_sir.jpeg",
      name: "Shalu Murali",
      position: "Executive Committee Member",
    },
    {
      src: "/Priyamam1.png",
      name: "Priya M",
      position: "Executive Committee Member",
    }
  ];

  return (
    <section className="section-panel">
      <div className="mb-10 text-center">
        <div className="eyebrow">Faculty</div>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-3"
        >
          <span className="text-accent">Faculty </span> Management
        </motion.h2>
        <p className="mx-auto max-w-2xl text-white/60">
          Faculty mentors supporting ACM Amritapuri across research, events, and student initiatives.
        </p>
      </div>
      <div className="responsive-people-grid xl:grid-cols-3">
        {facultyCards.map((faculty, index) => (
          <FacultyCards
            key={index}
            src={faculty.src}
            name={faculty.name}
            position={faculty.position}
          />
        ))}
      </div>
    </section>
  );
}

export default FacultyManagement;
