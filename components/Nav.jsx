import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiUsers,
} from "react-icons/hi2";
import {
  BsInfoCircleFill
} from "react-icons/bs";
import {
  IoLayers
} from "react-icons/io5";

import {
  FaPeopleRoof,
  FaUserGraduate
} from "react-icons/fa6";



// nav data
export const navData = [
  {name: "Home", path: "/#home", section: "home", Icon: HiHome },
  {name: "About", path: "/#about", section: "about", Icon: BsInfoCircleFill },
  {name: "Goals", path: "/#goals", section: "goals", Icon: HiRectangleGroup },
  {name: "Core Committee", path: "/#mentors", section: "mentors", Icon: FaPeopleRoof},
  {name: "Faculty", path: "/#faculty", section: "faculty", Icon: HiUsers},
  {name: "Alumni Advisory", path: "/#advisorycommittee", section: "advisorycommittee", Icon: FaUserGraduate},
  // {name: "Projects", path: "/projects", Icon: IoLayers },
  {name: "Testimonials", path: "/#testimonials", section: "testimonials", Icon: HiChatBubbleBottomCenterText},
  {name: "Contact", path: "/#contact", section: "contact", Icon: HiEnvelope},
];

const Nav = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = navData
      .map((link) => document.getElementById(link.section))
      .filter(Boolean);

    if (!sections.length) return;

    let animationFrame;

    const updateActiveSection = () => {
      const viewportMarker = window.innerHeight * 0.45;
      const currentSection =
        sections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= viewportMarker && rect.bottom > viewportMarker;
        }) ?? sections[0];

      setActiveSection(currentSection.id);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, i) => {
          const isActive = activeSection === link.section;
          return (
            <Link
              className={`${
                isActive ? "!text-accent" : "!text-white/70"
              } relative flex items-center group hover:!text-accent transition-all duration-300`}
              href={link.path}
              key={i}
            >
              {/* tolltip */}
              <div
                role="tooltip"
                className="absolute pr-14 right-0 hidden xl:group-hover:flex"
              >
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>

                  {/* triangle */}
                  <div
                    className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                    aria-hidden
                  />
                </div>
              </div>

              {/* icon */}
              <div>
                <link.Icon size={22} aria-hidden />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
