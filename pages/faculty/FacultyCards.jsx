import Image from "next/image";
import React, { useState } from 'react';


export default function FacultyCards(props) {
    const { src, name, position } = props;
    const [hover, setHover] = useState(false);

    return (
        <div
            className={`relative h-[310px] w-full max-w-[270px] overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-xl shadow-black/30 transition-all duration-300 ${hover ? 'scale-[1.03] border-accent/60 bg-accent/10' : 'scale-100'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Image src={src} alt={name} width={246} height={246} className="h-[220px] w-full rounded-md object-cover" />
            <div className="absolute inset-x-3 bottom-3 rounded-md bg-black/85 px-3 py-3 text-center backdrop-blur">
                <p className="truncate text-lg font-semibold text-white">{name}</p>
                <p className="text-sm font-medium text-accent">{position}</p>
            </div>
        </div>
    );
}
