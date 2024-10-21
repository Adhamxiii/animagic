import { navigation } from "@/data";
import { logo } from "@/public";
import Image from "next/image";
import React from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Sidebar = ({ openSidebar, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[200] w-full bg-[--bg-secondary] bg-opacity-80 backdrop-blur-[50px] transition-all overflow-hidden ${
        openSidebar ? "h-full opacity-100" : "h-0 opacity-0"
      }`}
    >
      <div className="p-4">
        <div className="flex__center !justify-between">
          <div className="flex__center size-10">
            <Image src={logo} alt="" />
          </div>
          <div className="icon__container" onClick={() => onClose()}>
            <FaTimes />
          </div>
        </div>
        <div className="middle navlinks">
          {navigation.map((nav, i) => (
            <Link
              key={i}
              to={nav.id}
              smooth
              className="block py-[10px] text-base font-medium cursor-pointer transition-all hover:text-[#5100ff]"
              onClick={onClose}
            >
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
