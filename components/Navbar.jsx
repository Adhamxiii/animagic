"use client";
import { navigation } from "@/data";
import { logo } from "@/public";
import Image from "next/image";
import { MdSunny } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-scroll";
import { useState, useMemo } from "react";
import { TiThMenu } from "react-icons/ti";
import Sidebar from "./Sidebar";
import { useTheme } from "../lib/ThemeContext";
import useNavbar from "@/hook/useNavbar";

const Navbar = () => {
  const { showNavbar } = useNavbar();
  const { isDark, toggleTheme } = useTheme();
  const [openSidebar, setOpenSidebar] = useState(false);

  const navClasses = useMemo(() => {
    return `flex__center ${
      showNavbar ? "drop" : ""
    } !justify-between absolute top-5 left-1/2 -translate-x-1/2 max-w-fit z-50 ${
      isDark ? "bg-[#171719]" : "bg-white"
    } bg-opacity-50 px-4 py-2 rounded-xl backdrop-blur-[50px] border-[--gray-border] border border-solid max-md:max-w-full max-md:w-[90%]`;
  }, [showNavbar, isDark]);

  return (
    <>
      <Sidebar
        openSidebar={openSidebar}
        onClose={() => setOpenSidebar(false)}
      />
      <nav id="navbar" className={navClasses}>
        <div className="flex__center size-10">
          <Image src={logo} alt="" width={100} height={100} />
        </div>
        <div className="flex items-center gap-[30px] max-md:hidden">
          {navigation.map((item) => (
            <Link
              to={item.id}
              spy={true}
              smooth={true}
              key={item.id} // Assuming item.id is unique
              duration={500}
              offset={-50}
              className="text-base font-bold block cursor-pointer transition-all duration-300 ease-in-out"
              activeClass="text-[#5100ff]"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex__center">
          <label className="flex items-center">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={isDark}
              className="absolute -top-full hidden size-0 opacity-0"
            />
            <div className="icon__container">
              <MdSunny
                className={`transition-transform duration-400 ease-in-out ${
                  isDark ? "scale-0" : "scale-100"
                } text-[#010101]`}
              />
              <CgDarkMode
                className={`transition-transform duration-400 ease-in-out ${
                  isDark ? "scale-100" : "scale-0"
                } text-white`}
              />
            </div>
          </label>
          <div
            className="icon__container !hidden max-md:!flex"
            onClick={() => setOpenSidebar(!openSidebar)}
          >
            <TiThMenu />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
