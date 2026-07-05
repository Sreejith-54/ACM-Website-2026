import { motion } from "framer-motion";

import BulbFull from "../../components/BulbFull";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="inner-page flex items-center">
      <Circles />
      <div className="inner-shell">
        <div className="section-panel flex flex-col gap-10 xl:flex-row xl:items-center">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left">
            <div className="eyebrow">Built here</div>
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              Our <span className="text-accent">Projects</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[440px] mx-auto lg:mx-0"
            >
              Delve into some of our most mind-blowing projects that we have
              worked on.
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <BulbFull />
    </div>
  );
};

export default Work;
