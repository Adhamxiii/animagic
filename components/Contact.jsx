import { contactInfo } from "@/data";
import ListOptionUi from "@/public/ListOptionUi";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-[30px]">
        <div className="left__column">
          <div className="bg-[--bg-secondary] shadow rounded-3xl overflow-hidden mb-[30px] relative">
            <div className="p-5 z-[2]">
              <h2 className="sub__title leading-tight">
                Let’s <span className="primary">create something</span> amazing
                together!
              </h2>
              <p className="description my-4 mx-0 !text-sm">
                Feel free to reach out for projects, collaborations, or web
                development inquiries via the form or email!
              </p>
            </div>
            <ListOptionUi className="absolute z-[1] -right-[10px] -bottom-[20px] w-1/2 h-auto" />
          </div>
          <div className="bg-[--bg-secondary] shadow rounded-3xl overflow-hidden bg-[url('../public/bg2.png')] bg-[length:100%_100%] bg-no-repeat">
            <div className="p-5 z-[2]">
              {contactInfo.map((contact, i) => (
                <div
                  className="flex bg-[rgba(var(--bg-secondary-rgb),0.8)] w-fit py-[10px] px-5 rounded-3xl my-[10px] mx-0 group"
                  key={i}
                >
                  <div className="icon__container group-hover:scale-110 group-hover:text-[--text-color]">
                    {contact.icon}
                  </div>
                  <div className="details">
                    <div className="name">{contact.name}</div>
                    <p className="text__muted value">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <form className="p-5 w-full bg-[--bg-secondary] shadow rounded-3xl overflow-hidden relative">
          <div className="spotlight !w-[170px] !h-[100px] right-0 -bottom-[30px]" />
          <h2 className="sub__title">
            Let’s work <span className="primary">together!</span>
          </h2>
          <div className="flex gap-5 justify-between">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="block w-full p-[10px] my-5 mx-0 rounded-xl text-[--text-color] text-[15px] overflow-hidden transition-all border-2 border-solid border-[--color-primary] resize-none h-[50px] bg-transparent focus:border-[--color-primary-light] focus:bg-[rgba(var(--bg-base-rgb),0.5)]"
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="block w-full p-[10px] my-5 mx-0 rounded-xl text-[--text-color] text-[15px] overflow-hidden transition-all border-2 border-solid border-[--color-primary] resize-none h-[50px] bg-transparent focus:border-[--color-primary-light] focus:bg-[rgba(var(--bg-base-rgb),0.5)]"
            />
          </div>
          <div className="flex gap-5 justify-between">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="block w-full p-[10px] my-5 mx-0 rounded-xl text-[--text-color] text-[15px] overflow-hidden transition-all border-2 border-solid border-[--color-primary] resize-none h-[50px] bg-transparent focus:border-[--color-primary-light] focus:bg-[rgba(var(--bg-base-rgb),0.5)]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="block w-full p-[10px] my-5 mx-0 rounded-xl text-[--text-color] text-[15px] overflow-hidden transition-all border-2 border-solid border-[--color-primary] resize-none h-[50px] bg-transparent focus:border-[--color-primary-light] focus:bg-[rgba(var(--bg-base-rgb),0.5)]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            className="block w-full p-[10px] my-5 mx-0 rounded-xl text-[--text-color] text-[15px] overflow-hidden transition-all border-2 border-solid border-[--color-primary] resize-none h-[130px] bg-transparent focus:border-[--color-primary-light] focus:bg-[rgba(var(--bg-secondary-rgb),0.5)]"
          />
          <button
            type="basemit"
            className="btn btn__primary block w-fit m-auto"
          >
            Send Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
