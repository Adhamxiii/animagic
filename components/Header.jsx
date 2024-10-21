"use client";
import { socialHandles } from "@/data";
import { me } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Link as LinkRs } from "react-scroll";
import AnimatedNumbers from "react-animated-numbers";

const stats = [
  { id: "experience", value: 6, label: "Years Of Experience" },
  { id: "projects", value: 150, label: "Completed Projects" },
  { id: "awards", value: 12, label: "Awards", icon: "🏆" },
  { id: "clients", value: 321, label: "Clients Worldwide" },
];

const Header = () => {
  return (
    <section id="header" className="bg__secondary">
      <div className="spotlight !w-1/2 !left-1/2 !-translate-x-1/2" />
      <div className="min-h-screen xl:min-h-[auto] pt-[120px] overflow-visible max-w-screen-xl mx-auto">
        <div className="grid grid-cols-[400px,auto] max-md:grid-cols-[100%] gap-[30px] relative z-[1] pb-[30px]">
          <div className="max-md:order-2 max-md:max-w-[400px] max-md:m-auto">
            <Image src={me} alt="A picture of Adham" />
          </div>
          <div className="max-md:order-1">
            <h2 className="max-md:text-center sub__title">
              Hi 👋, I&apos;m Adham
            </h2>
            <h1 className="max-md:text-center title">Frontend Developer</h1>
            <p className="text-xl max-md:text-center">
              I specialize in building modern, responsive, and user-friendly web
              interfaces. With a passion for clean code and seamless user
              experiences, I turn ideas into digital solutions that not only
              look great but also perform flawlessly. Let’s work together to
              bring your vision to life!
            </p>
            <div className="flex items-center gap-[20px] my-[30px] mx-auto max-md:justify-center max-md:flex-col">
              <div className="flex items-center gap-3">
                {socialHandles.map((handle) => (
                  <Link
                    key={handle.name}
                    href={handle.link}
                    target="_blank"
                    className="bg-[--bg-base] max-md:justify-center icon__container handle"
                  >
                    {handle.icon}
                  </Link>
                ))}
              </div>
              <LinkRs to="contact" smooth className="btn btn__primary">
                Contact Me
              </LinkRs>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full z-[2] grid grid-cols-4 gap-4 bg-[--bg-base] bg-opacity-50 backdrop-blur-[50px] p-8 rounded-xl max-md:grid-cols-2">
            <div className="spotlight !w-[40%] !h-[90px] !right-0" />
            {stats.map((stat) => (
              <div key={stat.id} className="point flex flex-col items-start">
                <div className="flex items-center gap-[5px] max-md:justify-center">
                  <AnimatedNumbers
                    includeComma
                    transitions={(index) => ({
                      type: "spring",
                      duration: index + 0.3,
                    })}
                    animateToNumber={stat.value}
                    fontStyle={{
                      fontSize: 30,
                      fontWeight: 500,
                    }}
                  />
                  <h3 className="sub__title">{stat.icon || "+"}</h3>
                </div>
                <p className="max-md:text-[10px] text-center">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
