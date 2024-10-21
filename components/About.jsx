"use client";

import { me } from "@/public";
import Window from "@/public/Window";
import Image from "next/image";
import React from "react";
import CodeBlock from "./CodeBlock";
import GridWireframe from "@/public/GridWireFrame";
import { techStack } from "@/data";
import Grid from "@/public/Grid";
import CardUi from "@/public/CardUi";
import { Link } from "react-scroll";

const code = `
    firstName : "Adham",
    lastName : "Nasser",
    aka : "The Codefather",
    hobby : repeat=()=>{
        //eat();
        //sleep();
        //code();
        //repeat();
    }
`;

const About = () => {
  return (
    <section id="about">
      <div className="container grid max-md:grid-cols-1 grid-cols-3 gap-[30px]">
        <div className="bg-[--bg-secondary] rounded-3xl shadow py-5 relative overflow-hidden max-md:items-start">
          <div className="spotlight !w-[180px] !right-0" />
          <div className="p-5 relative z-[2] gap-5">
            <div className="flex items-center gap-[10px] mb-5 bg-[rgba(var(--bg-base-rgb),0.8)] p-[10px] rounded-3xl">
              <div className="profile">
                <Image src={me} alt="" />
              </div>
              <div className="details">
                <h4>Adham Nasser</h4>
                <p className="text__muted">Frontend Developer</p>
              </div>
            </div>
            <h2 className="sub__title">
              <span className="primary">Passionate</span> Developer
            </h2>
            <p className="description my-[10px]">
              I adapt to different time zones to make sure communication is
              smooth, no matter where you&apos;re located.
            </p>
          </div>
          <Window
            color="var(--color-primary-light)"
            className="absolute -bottom-[10px] right-0 z-[1] window"
          />
        </div>

        <div className="col-span-2 max-md:col-span-1 bg-[--bg-secondary] rounded-3xl shadow py-5 relative overflow-hidden">
          <div className="spotlight !w-[180px] !right-0" />
          <div className="flex max-md:flex-col p-5 relative z-[2] gap-5 ">
            <CodeBlock code={code} language="javascript" />
            <div className="flex-1 p-5 rounded-3xl bg-[rgba(var(--bg-secondary-rgb),0.5)] shadow">
              <h2 className="sub__title">
                What <span className="primary">Drives Me</span>
              </h2>
              <p className="description my-[10px]">
                I’m passionate about the intersection of design 🎨 and
                development 💻. I believe the best digital experiences are built
                with a deep understanding of the user 👤 and a commitment to
                innovation 🌟. Whether working on a simple landing page or a
                complex web app, I bring precision 🎯, creativity ✨, and a
                user-first mindset to every project.
              </p>
            </div>
          </div>
          <GridWireframe
            width={"90%"}
            height={"auto"}
            color="var(--color-primary-light)"
            className="absolute -bottom-[10px] right-0 z-[1] grid__wireframe"
          />
        </div>

        <div className="col-span-2 max-md:col-span-1 bg-[--bg-secondary] rounded-3xl shadow py-5 relative overflow-hidden">
          <div className="p-5 relative z-[2] gap-5">
            <div className="column">
              <h2 className="sub__title">
                My <span className="primary">Tech Stack</span>
              </h2>
              <p className="description my-[10px]">
                Always Evolving My Tech Stack
              </p>
            </div>
            <div className="column grid grid-cols-3 gap-5 pt-5">
              {techStack.map((stack, i) => (
                <div
                  className="flex__center btn bg-[rgba(var(--bg-secondary-rgb),0.8)] shadow max-md:gap-[5px] py-[5px] px-[10px] text-sm"
                  key={i}
                >
                  {stack.icon}
                  {stack.name}
                </div>
              ))}
            </div>
          </div>

          <Grid className="absolute -bottom-[10px] left-0 z-[1]" />
          <CardUi
            className="absolute -bottom-[20px] right-[10px] z-[1] size-[200px]"
            color="gray"
            background="rgba(var(--bg-base-rgb),0.5)"
          />
        </div>

        <div className="bg-[--bg-secondary] flex__center bg-[url('../public/bg1.jpg')] bg-[length:100%_100%] bg-no-repeat text-center">
          <div className="p-5 relative z-[2] gap-5">
            <h2 className="text__white sub__title">
              I&apos;m Committed to Collaboration and Clear Communication
            </h2>
            <div className="flex__center mt-[30px]">
              <Link
                to="contact"
                smooth
                className="btn bg-[#222] text-[--text-color] rounded-none border border-solid border-transparent borderImage"
              >
                Let Collaborate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
