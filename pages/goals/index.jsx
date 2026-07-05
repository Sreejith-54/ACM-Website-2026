import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import GoalsSlider from "../../components/GoalsSlider";
import { fadeIn } from "../../variants";

export const serviceData = [];

const Services = () => {
  return (
    <div className="inner-page flex items-center">
      <Circles />
      <div className="inner-shell">
        <div className="section-panel flex flex-col gap-10 xl:flex-row xl:items-center">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left">
            <div className="eyebrow">Direction</div>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Our <span className="text-accent">goals</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[460px] mx-auto lg:mx-0"
            >
              Some ideas seem impractical on paper but become feasible with the right team and support. We provide a platform that helps students bring challenging projects to life, turning innovative ideas into reality.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <GoalsSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
