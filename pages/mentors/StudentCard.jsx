import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const SOCIAL_CONFIG = {
  instagram: { icon: '/instagram.png', label: 'Instagram' },
  linkedin: { icon: '/linkedin.png', label: 'LinkedIn' },
  github: { icon: '/github.png', label: 'GitHub' },
};

const SocialLink = ({ href, platform }) => {
  const config = SOCIAL_CONFIG[platform];
  if (!config) return null;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-10 h-10 transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#80fffb] focus:ring-offset-2 focus:ring-offset-black rounded-lg"
      aria-label={`Visit ${config.label} profile`}
    >
      <Image
        src={config.icon}
        alt={config.label}
        fill
        className="object-contain"
        sizes="40px"
      />
    </motion.a>
  );
};

const StudentCard = ({
  src,
  name,
  position,
  instagram,
  linkedin,
  github,
  width = 300,
  height = 400,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const hasSocials = instagram || linkedin || github;
  const socials = [
    { key: 'instagram', href: instagram },
    { key: 'linkedin', href: linkedin },
    { key: 'github', href: github },
  ].filter((s) => s.href);

  return (
    <motion.div
      className="relative flex flex-col items-center rounded-xl overflow-hidden cursor-pointer group"
      style={{ width, height }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Card Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#393970] to-[#2a2a5a] transition-colors duration-300 group-hover:from-[#80fffb] group-hover:to-[#5ce0dc]" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(128,255,251,0.3)] pointer-events-none" />

      {/* Image Container */}
      <div className="relative w-full flex-1 overflow-hidden">
        <Image
          src={src}
          alt={`${name} - ${position}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes={`${width}px`}
          priority
        />
        
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Info Section */}
      <div className="absolute bottom-0 w-full p-4 text-center z-10 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
          {name}
        </h3>
        <p className="text-sm text-gray-300 font-medium tracking-wide uppercase drop-shadow-md">
          {position}
        </p>
      </div>

      {/* Bottom Social Bar */}
      <AnimatePresence>
        {isHovered && hasSocials && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute bottom-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-sm flex items-center justify-center gap-6 z-20"
          >
            {socials.map(({ key, href }) => (
              <SocialLink key={key} href={href} platform={key} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default StudentCard;