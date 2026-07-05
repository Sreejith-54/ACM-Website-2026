import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function StudentCard(props) {
    const { src, name, position, instagram, linkedin, github, imageStyle } = props;
    const [hover, setHover] = useState(false);

    return (
        <AnimatePresence>
            <motion.div
                animate={{ y: hover ? -6 : 0, scale: hover ? 1.03 : 1 }}
                className="relative mt-24 flex h-[270px] w-full max-w-[280px] flex-col items-center rounded-lg border border-white/10 bg-white/[0.06] px-4 pb-5 shadow-xl shadow-black/30"
                onMouseEnter={() => { setHover(true); }}
                onMouseLeave={() => { setHover(false); }}
            >
                <Image
                    src={src}
                    alt={name}
                    className="mt-[-100px] h-[210px] w-[205px] rounded-lg object-cover shadow-2xl shadow-black/40"
                    style={imageStyle}
                    width={200} // Add appropriate width
                    height={200} // Add appropriate height
                />
                <p className="mt-4 max-w-full truncate text-center text-lg font-semibold text-white">{name}</p>
                <p className="text-center text-sm font-medium text-accent">{position}</p>
                <AnimatePresence>
                    {hover && (
                        <motion.div className="mt-4 flex rounded-md bg-black/50 p-2 text-white">
                            <button className="active:scale-90 transition duration-150">
                                <a href={instagram} target="_blank" rel="noreferrer">
                                    <Image
                                        className="h-8 w-8 mr-3"
                                        src="/instagram.png"
                                        width={25}
                                        height={25}
                                        alt="Instagram"
                                    />
                                </a>
                            </button>
                            <button className="active:scale-90 transition duration-150">
                                <a href={linkedin} target="_blank" rel="noreferrer">
                                    <Image
                                        className="h-8 w-8 mr-3 rounded-lg"
                                        src="/linkedin.png"
                                        width={25}
                                        height={25}
                                        alt="LinkedIn"
                                    />
                                </a>
                            </button>
                            <button className="active:scale-90 transition duration-150">
                                <a href={github} target="_blank" rel="noreferrer">
                                    <Image
                                        className="h-8 w-8 rounded-lg"
                                        src="/github.png"
                                        width={25}
                                        height={25}
                                        alt="GitHub"
                                    />
                                </a>
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </AnimatePresence>
    );
}
