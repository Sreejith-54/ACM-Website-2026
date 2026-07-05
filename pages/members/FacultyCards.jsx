import Image from "next/image";

export default function FacultyCards(props) {
    const { src, name, position } = props;

    return (
        <div
            className="flex h-[320px] w-full max-w-[270px] flex-col items-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.06] p-3 shadow-xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-accent/10"
        >
            <Image src={src} alt={name} width={240} height={220} className="h-[220px] w-full rounded-md object-cover" />
            <p className="mt-4 max-w-full truncate text-center text-lg font-semibold text-white">
                {name}
            </p>
            <p className="text-center text-sm font-medium text-accent">
                {position}
            </p>
        </div>
    );
}
