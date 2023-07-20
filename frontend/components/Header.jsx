import React from "react";

export default function Header() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <img src="https://picsum.photos/id/1081/800/600" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="p-10 text-center sm:text-left md:text-center lg:text-left">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
            deleniti eaque aut repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
