"use client";

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import Card from "@/components/Card";

export default function Carousel() {
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
      {/*<!-- Component: Slider with indicators inside --> */}
      <div className="relative w-96 max-h-full glide-02">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <Card
                imageUrl="/portfolio.webp"
                link="https://github.com/enricofindley/portfolio"
                title="Portfolio Project"
                tech="8.99"
                description="Portfolio project using React, Next.js, Tailwind CSS, and Heroicons."
              />
            </li>
            <li>
              <Card
                imageUrl="/corn-disease.webp"
                link="https://www.kaggle.com/code/enricofindley/house-sales-in-king-county-usa-data-analysis"
                title="Thesis Project"
                tech="8.99"
                description="My thesis project on corn disease classification using LSTM."
              />
            </li>
            <li>
              <Card
                imageUrl="/rocket.webp"
                link="https://www.kaggle.com/code/enricofindley/house-sales-in-king-county-usa-data-analysis"
                title="SpaceX Project"
                tech="8.99"
                description="Analyze, visualizing, and predicting best launch from SpaceX rocket."
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div className="absolute bottom-0 flex items-center justify-center w-full gap-2" data-glide-el="controls[nav]">
          <button className="p-4 group" data-glide-dir="=0" aria-label="goto slide 1">
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button className="p-4 group" data-glide-dir="=1" aria-label="goto slide 2">
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
          <button className="p-4 group" data-glide-dir="=2" aria-label="goto slide 3">
            <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
          </button>
        </div>
      </div>
    </>
  );
}
