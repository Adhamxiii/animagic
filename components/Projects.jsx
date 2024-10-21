"use client";
import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[--color-primary] bg-[url('../public/bg2.png')] bg-[length:100%_100%] bg-no-repeat"
    >
      <div className="container">
        <div className="section__header !text-white">
          <h1 className="sub__title">My Recent Projects</h1>
          <p className="description">
            Explore my latest work, blending creativity and code for functional,
            responsive websites with clean design and seamless user experiences.
          </p>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[50px] max-w-[900px] m-auto mt-[70px]">
          {projects.map((project) => (
            <div
              className="flex flex-col justify-between items-stretch bg-[--bg-secondary] overflow-hidden rounded-3xl shadow"
              key={project.name}
            >
              <Link
                href={project.url}
                target="_blank"
                className="overflow-hidden max-h-[300px]"
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  width={500}
                  height={500}
                  className="transition-all hover:scale-110 object-cover"
                />
              </Link>
              <div className="flex flex-col justify-between items-stretch flex-1 p-5">
                <div className="name line__clamp__1">{project.name}</div>
                <p className="text__muted description line__clamp__4 flex-1 text-base mt-[10px]">
                  {project.description}
                </p>
                <div className="flex mt-5">
                  <Link
                    href={project.url}
                    target="_blank"
                    className="flex__center btn text-[#5100ff] p-0"
                  >
                    <FaExternalLinkAlt /> View Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
