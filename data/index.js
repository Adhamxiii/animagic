import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiFiverr, SiExpress, SiTypescript } from "react-icons/si";
import {
  MdOutlineAlternateEmail,
  MdOutlineDesignServices,
} from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { FiCode, FiSmartphone } from "react-icons/fi";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  project1,
  project2,
  project3,
  project4,
} from "../public";

export const navigation = [
  { name: "Home", id: "header" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact", id: "contact" },
];
export const techStack = [
  { name: "ReachJs", icon: <FaReact /> },
  { name: "ExpressJs", icon: <SiExpress /> },
  { name: "Typescript", icon: <SiTypescript /> },
  { name: "NextJs", icon: <RiNextjsFill /> },
  { name: "TailwindCSS", icon: <RiTailwindCssFill /> },
];

export const services = [
  {
    icon: <FiSmartphone />,
    name: "Responsive Web Design",
    description: `
          Crafting visually appealing and fully responsive websites that adapt seamlessly to any device, ensuring an excellent user experience on desktops, tablets, and smartphones.`,
  },
  {
    icon: <FiCode />,
    name: "Custom Web Development",
    description: `
          Building dynamic, interactive web applications tailored to your specific needs, using modern frontend technologies to create scalable and maintainable solutions.`,
  },
  {
    icon: <MdOutlineDesignServices />,
    name: "UI/UX Optimization",
    description: `
          Enhancing user engagement with intuitive and aesthetically pleasing interfaces, prioritizing performance, accessibility, and smooth navigation for optimal user satisfaction.`,
  },
];

export const projects = [
  {
    name: "AI-Powered E-commerce Platform",
    description: `Leverage artificial intelligence to create a personalized shopping experience. This e-commerce platform uses machine learning algorithms to recommend products, optimize user experience, and increase conversions.`,
    image:
      "https://cdn.dribbble.com/userupload/8399775/file/original-c283e774b421c57e31996443e3eb1d12.png?resize=752x",
    url: "https://example.com/ai-ecommerce",
  },
  {
    name: "Fitness Tracker App with React Native",
    description: `Build a cross-platform fitness tracker app using React Native. Monitor workouts, track progress, and set goals, all while providing a seamless user experience on both Android and iOS devices.`,
    image:
      "https://cdn.dribbble.com/userupload/16639095/file/original-140141b43653543128f03197bfba15e6.png?resize=752x",
    url: "https://example.com/fitness-tracker",
  },
  {
    name: "Blockchain-Based Voting System",
    description: `Develop a secure and transparent voting platform powered by blockchain technology. This decentralized system ensures integrity and prevents tampering, ideal for modern election systems.`,
    image:
      "https://cdn.dribbble.com/userupload/8266064/file/original-5d014b97bbb911893e4c3fcfb724167a.jpg?resize=752x",
    url: "https://example.com/blockchain-voting",
  },
  {
    name: "Weather Dashboard with Real-Time Data",
    description: `Create an intuitive weather dashboard that provides real-time data on temperature, humidity, and forecasts. This project uses APIs to fetch data, offering users an up-to-date weather report with an interactive UI.`,
    image:
      "https://cdn.dribbble.com/userupload/4246709/file/original-7ec7d3e380f5f080b4d0fea878dc4375.jpg?resize=752x",
    url: "https://example.com/weather-dashboard",
  },
];

export const testimonies = [
  {
    profile: client1,
    name: "Jessica Harper",
    position: "Product Manager",
    company: "echNova Solutions",
    content: `Working with Emmanuel was a breeze! He’s fast, communicative, and his code is always clean and efficient. Our website looks and performs better than ever.`,
  },
  {
    profile: client2,
    name: "Mark Thompson",
    position: "CEO",
    company: "Dynamic Designs",
    content: `Working with Emmanuel was a breeze! He’s fast, communicative, and his code is always clean and efficient. Our website looks and performs better than ever.`,
  },
  {
    profile: client3,
    name: "Clara Mensah",
    position: "Marketing Director",
    company: "BrightPath Agency",
    content: `Emmanuel’s frontend skills took our branding to the next level. He was able to bring our design concepts to life with stunning accuracy and creativity. I highly recommend him!`,
  },
  {
    profile: client4,
    name: "Samuel Okwuosa",
    position: "CTO",
    company: "Greenline Tech",
    content: `Emmanuel is hands-down one of the best frontend developers I've worked with. His expertise made our site not only look great but perform flawlessly across all devices.`,
  },
  {
    profile: client5,
    name: "Linda Ruiz",
    position: "Co-Founder",
    company: "PixelSpark Creative Studio",
    content: `Emmanuel is incredibly talented. He consistently delivers pixel-perfect designs and smooth user experiences. I appreciate his dedication to excellence and innovation."`,
  },
  {
    profile: client6,
    name: "Tunde Adebayo",
    position: "Lead Developer",
    company: "CodeWave",
    content: `Emmanuel is a top-notch frontend developer! His work always exceeds expectations, and he’s a pleasure to collaborate with. Our site is now faster and more user-friendly than ever.`,
  },
];

export const contactInfo = [
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    value: "adhamxiii22@gmail.com",
  },
  {
    name: "Phone",
    icon: <IoCallOutline />,
    value: "+123456789",
  },
  {
    name: "Address",
    icon: <IoLocationOutline />,
    value: "Alexandria, Egypt",
  },
];

export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "",
  },
  {
    name: "LinkedIn",
    icon: <CiLinkedin />,
    link: "",
  },
  {
    name: "Youtube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const footer = [
  {
    id: 1,
    group: "Hot Links",
    routes: [
      { name: "Home", id: "header" },
      { name: "About", id: "about" },
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Testimonials", id: "testimonials" },
      { name: "Contact", id: "contact" },
    ],
  },
  {
    id: 2,
    group: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
