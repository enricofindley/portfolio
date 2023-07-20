import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Project />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
