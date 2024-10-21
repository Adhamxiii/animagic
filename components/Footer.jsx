"use client";
import { footer, socialHandles } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Link as LinkRs } from "react-scroll";
import React from "react";
import { logo } from "@/public";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[--bg-secondary] rounded-t-[50px] shadow relative overflow-hidden"
    >
      <div className="spotlight -bottom-[50px] -left-[50px] !h-[120px]" />
      <div className="!pb-5 container">
        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5">
          <div className="col-span-2 max-md:col-span-1 column">
            <div className="flex__center size-10">
              <Image src={logo} alt="Company Logo" width={100} height={100} />
            </div>
            <p className="text__muted description my-5">
              Crafting responsive, high-performance websites 🌐 with clean code
              💻 and a user-focused approach 👥. Let’s build something amazing
              together 🚀.
            </p>
            <div className="flex items-center gap-3">
              {socialHandles.map((handle) => (
                <Link
                  key={handle.name}
                  href={handle.link}
                  target="_blank"
                  className="bg-transparent max-md:justify-center icon__container"
                >
                  {handle.icon}
                </Link>
              ))}
            </div>
          </div>
          {footer.map((list) => (
            <div key={list.id} className="column">
              <h3 className="text-base mb-[15px]">{list.group}</h3>
              <div className="routes__container">
                {list.routes.map((route) => (
                  <LinkRs
                    key={route.name}
                    to={route.id}
                    smooth
                    className="block text-[--color-muted] transition-all text-[15px] cursor-pointer my-[10px] hover:text-[--color-primary]"
                  >
                    {route.name}
                  </LinkRs>
                ))}
              </div>
            </div>
          ))}
        </div>
        <article className="mt-20 text-center">
          <h3 className="text-[15px] font-medium mb-5 text-[--color-primary]">
            Copyright &copy; 2024 Adham. All rights reserved.
          </h3>
          <p className="text__muted">Built with love by Adham</p>
        </article>
      </div>
    </footer>
  );
};

export default Footer;
