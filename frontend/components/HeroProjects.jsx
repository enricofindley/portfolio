import React from "react";
import Carousel from "@/components/Carousel";

export default function HeroProjects() {
  return (
    <>
      <section className="min-h-screen p-10 bg-base-100">
        <div className="container px-6 m-auto items-center">
          {/*<!-- Component: Alternative Changelog feed --> */}

          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow place-items-center pb-10">
              <img src="/project-hero.png" className="w-full" />
            </div>
            <div className="grid flex-grow place-items-center">
              <h1 class="text-5xl font-bold text-center">Noteworthy Project</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
