import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const AdvisoryCard = (props) => {
  const { src, name, linkedin, github } = props;
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`relative h-[300px] w-full max-w-[260px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-xl shadow-black/30 transition-all duration-300 ${hover ? 'scale-[1.03] border-accent/60 bg-accent/10' : 'scale-100'}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image src={src} alt={name} width={236} height={236} className="h-[220px] w-full rounded-md object-cover" />
      <div className="absolute inset-x-3 bottom-3 rounded-md bg-black/80 px-3 py-3 text-center backdrop-blur">
        <p className="truncate text-lg font-semibold text-white">{name}</p>
        <p className="text-sm font-medium text-accent">Alumni Advisor</p>
      </div>
      <AnimatePresence>
        {hover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-3 bottom-3 flex h-[72px] flex-row items-center justify-center space-x-5 rounded-md bg-black/95"
          >
            {linkedin && (
              <a className="rounded-md bg-white/10 p-2 transition hover:bg-white/20" href={linkedin} target="_blank" rel="noreferrer">
                <Image src="/linkedin.png" width={28} height={28} alt="LinkedIn" />
              </a>
            )}
            {github && (
              <a className="rounded-md bg-white/10 p-2 transition hover:bg-white/20" href={github} target="_blank" rel="noreferrer">
                <Image src="/github.png" width={28} height={28} alt="GitHub" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvisoryCard;


