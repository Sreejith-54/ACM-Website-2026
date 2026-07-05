import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Testimonials = () => {
  return (
    <div className="inner-page text-center">
      <div className="inner-shell section-panel flex min-h-[70vh] flex-col justify-center">
        <div className="eyebrow">Community voice</div>
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8"
        >
          Experiences & <span className="text-accent">Insights.</span>
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
