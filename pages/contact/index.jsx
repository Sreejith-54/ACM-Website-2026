import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import BulbFull from "../../components/BulbFull";
import Circles from "../../components/Circles";
import BusinessCard from "./BusinessCard";

const Contact = () => {
  return (
    <div className="inner-page">
      <Circles />
      <div className="inner-shell flex min-h-[70vh] items-center justify-center">
        <div className="section-panel w-full max-w-[760px] text-center">
          <div className="eyebrow">Contact</div>
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4 text-center"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mx-auto mb-10 max-w-xl"
          >
            Reach the ACM Student Chapter Amritapuri team for collaborations, events, and chapter queries.
          </motion.p>
          <div className="flex justify-center">
            <BusinessCard />
          </div>
        </div>
      </div>
      <BulbFull />
    </div>
  );
};

export default Contact;
