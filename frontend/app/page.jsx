import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Education from "@/components/Education";
import Work from "@/components/Work";
const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Education />
        <Work />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
