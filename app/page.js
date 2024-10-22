"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import Loading from "./loading";

const Navbar = lazy(() => import("@/components/Navbar"));
const Header = lazy(() => import("@/components/Header"));
const About = lazy(() => import("@/components/About"));
const Services = lazy(() => import("@/components/Services"));
const Projects = lazy(() => import("@/components/Projects"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      <Suspense fallback={<Loading />}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Header />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Footer />
      </Suspense>
    </div>
  );
}
