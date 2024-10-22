"use client";
import { testimonies } from "@/data";
import Image from "next/image";
import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const settings = {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  speed: 5000,
  centeredSlides: true,
  modules: [Autoplay],
  breakpoints: {
    600: {
      slidesPerView: "auto",
    },
  },
};

const Testimonials = () => {
  const ref = useRef();

  useGSAP(
    () => {
      gsap
        .timeline({
          delay: 0.5,
          scrollTrigger: {
            trigger: ref.current,
            start: "20% bottom",
            end: "bottom top",
          },
        })
        .from(".section__header .sub__title", {
          opacity: 0,
          x: -30,
        })
        .from(".testimonial", { opacity: 0, y: 30, stagger: 0.5 });
    },
    { scope: ref }
  );

  return (
    <section
      id="testimonials"
      ref={ref}
      className="overflow-hidden relative h-[450px] max-md:h-auto py-[50px] bg-[rgba(var(--bg-secondary-rgb),0.8)] before:absolute before:w-1/4 before:h-full before:top-0 before:z-[2] before:left-0 before:bg-gradient-to-l before:from-transparent before:to-[--bg-secondary] after:absolute after:w-1/4 after:h-full after:top-0 after:z-[2] after:right-0 after:bg-gradient-to-r after:from-transparent after:to-[--bg-secondary]"
    >
      <div className="section__header">
        <h2 className="sub__title text-center">
          What My <span className="primary">Clients</span> Says
        </h2>
      </div>
      <Swiper
        {...settings}
        className="mt-[50px] py-5 px-0 static h-full after:absolute after:bottom-0 after:left-0 after:z-[3] after:w-full after:h-[100px] max-md:after:h-[10px] after:bg-gradient-to-b after:from-[--bg-secondary] after:via-[--bg-secondary] after:to-[--bg-secondary] max-md:p-5"
      >
        {testimonies.map((list) => (
          <SwiperSlide
            key={list.name}
            className="testimonial !h-fit max-w-[60%] bg-[--bg-secondary] p-10 shadow rounded-[2rem] relative"
          >
            <div className="flex items-center gap-[10px] mb-[30px]">
              <div className="profile">
                <Image
                  src={list.profile}
                  alt={list.name}
                  width={50}
                  height={50}
                  priority
                />
              </div>
              <div className="details">
                <h3 className="text-base font-medium">{list.name}</h3>
                <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0 max-md:text-left max-md:text-sm">
                  <p className="text__muted position">{list.position}</p>
                  <p className="primary company">{list.company}</p>
                </div>
              </div>
            </div>
            <p className="text__muted text-base mb-5">{list.content}</p>
            <div className="flex__center !justify-start absolute bottom-10 left-10 max-md:bottom-5 max-md:left-5">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
