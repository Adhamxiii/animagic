"use client";
import { services } from "@/data";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Services = () => {
  return (
    <section id="services" className="bg__secondary">
      <div className="relative z-[2] container w-full">
        <div className="section__header">
          <h2 className="sub__title text-center">
            My <span className="primary">Services</span>
          </h2>
          <p className="description">
            As a frontend developer, I create modern, responsive, and
            user-friendly websites that are both visually appealing and
            efficient.
          </p>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 mt-[50px]">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex__center flex-col py-[50px] px-5 bg-[rgba(var(--bg-secondary-rgb),0.5)] backdrop-blur-[50px] overflow-hidden rounded-3xl border-[0.5px] border-solid border-[#464444]"
            >
              <div className="spotlight !w-[40%]" />
              <div className="icon__container !size-20 !m-auto !mb-10 !relative rounded-full !border border-solid !border-[#464444] !text-3xl bg-[--bg-base]">
                {service.icon}
              </div>
              <h3 className="text-center mb-5">{service.name}</h3>
              <p className="text__muted description text-center mb-5">
                {service.description}
              </p>
              <div className="flex__center">
                <Link
                  to="contact"
                  smooth
                  className="btn inline-flex items-center border-[0.5px] border-solid border-[#5100ff] bg-[rgba(var(--bg-secondary-rgb),0.5)] gap-[10px] text-[#5100ff] hover:text-white hover:bg-[#5100ff]"
                >
                  Let Talk <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
