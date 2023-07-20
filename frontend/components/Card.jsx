import React from "react";

export default function CardBlogAction() {
  return (
    <>
      {/*<!-- Component: Blog card with action button --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img src="https://picsum.photos/id/1081/800/600" alt="card image" className="aspect-video w-full" />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 flex gap-4">
            <a href="#" className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white">
              <img
                src="https://i.pravatar.cc/48?img=25"
                alt="user name"
                title="user name"
                width="48"
                height="48"
                className="max-w-full rounded-full"
              />
            </a>
            <div>
              <h3 className="text-xl font-medium text-slate-700">In the urban Jungle</h3>
              <p className="text-sm text-slate-400"> By Mary Jay, jun 3 2023</p>
            </div>
          </header>
          <p>
            Day to day life operates outside, so get ready to see the beach become the living room, and the street the
            kitchen. A simple, yet beautiful, way of life that explains the sunny outlook.
          </p>
        </div>
        {/*  <!-- Action base sized link button --> */}
        <div className="flex justify-end gap-2 p-2 pt-0">
          <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent">
            <span>Read more</span>
          </button>
        </div>
      </div>
      {/*<!-- End Blog card with action button --> */}
    </>
  );
}
