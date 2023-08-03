import React from "react";

export default function Card({ imageUrl, link, title, tech, description }) {
  return (
    <>
      <div className="card-container">
        <div className="overflow-hidden text-white-500 rounded bg-base-100 shadow-xl shadow-dark-300 transform transition-transform duration-300 ease-in-out hover:scale-105">
          {/*  <!-- Image --> */}
          <figure>
            <img src={imageUrl} alt={title} className="w-full h-52 object-cover" />
          </figure>
          {/*  <!-- Body--> */}
          <div className="p-6">
            <header className="mb-4">
              <h3 className="text-xl font-medium">{title}</h3>
            </header>
            <p className="text-justify">{description}</p>
          </div>
          {/*  <!-- Action base sized basic button --> */}
          <div className="flex justify-end p-6 pt-0">
            <a
              href={link}
              target="_blank"
              className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
