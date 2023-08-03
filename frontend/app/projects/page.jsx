import React from "react";
import Project from "@/components/Project";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroProjects from "@/components/HeroProjects";
const ProjectsPage = () => {
  return (
    <>
      <Header />
      <HeroProjects />
      <main>
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
