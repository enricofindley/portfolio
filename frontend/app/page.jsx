import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Work from "@/components/Work";
import HeroProjects from "@/components/HeroProjects";
const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <Education />
        <Work />
        <HeroProjects />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
