"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse items-center ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          transition={{ duration: 2, ease: "easeInOut" }}>
          <Image
            src="/profile.webp"
            className="w-72 shadow-2xl rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 "
            alt="Enrico Findley"
            width={300}
            height={300}
            loading="eager"
          />
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          transition={{ duration: 2, ease: "easeInOut" }}>
          <div className="p-10 text-center sm:text-left md:text-center lg:text-left ">
            <h1 className="text-5xl font-bold mb-1 ">Enrico Findley</h1>
            <h3 className="text-xl font-bold">Software Engineer | Data Scientist</h3>
            <p className="py-6">
              Hi I am Enrico Findley. Currently I am a Software Engineer, and also interested to work in Software
              Engineering or Data Science role.
            </p>
            <div>
              <a
                target="_blank"
                href="https://github.com/enricofindley"
                aria-label="Github"
                className="btn btn-square btn-outline mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="#FFFFFF" width="24" height="24">
                  <path d="M512 64c-247 0-448 201-448 448 0 198 128 366 305 425 22 4 30-9 30-21v-84c-124 26-151-54-151-54-20-51-48-64-48-64-39-26 3-26 3-26 43 3 66 45 66 45 38 65 99 46 123 36 4-28 15-46 27-56-98-11-201-49-201-221 0-49 18-90 47-122-5-11-21-57 5-119 0 0 37-12 122 46a425 425 0 01114-16c38 0 76 5 113 16 85-58 122-46 122-46 26 62 10 108 5 119 29 32 47 73 47 122 0 173-104 211-203 221 16 14 30 41 30 82v121c0 12 8 26 31 22 177-59 305-227 305-425 0-247-201-448-448-448z" />
                </svg>
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/enricofindley"
                aria-label="LinkedIn"
                className="btn btn-square btn-outline mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                  <circle cx="4.983" cy="5.009" r="2.188"></circle>
                  <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
                </svg>
              </a>
              <a
                target="_blank"
                href="https://twitter.com/enricofindley"
                aria-label="Twitter"
                className="btn btn-square btn-outline mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                </svg>
              </a>
            </div>
            <br />
            <form method="get" action="CV_EnricoFindley.pdf">
              <button
                type="submit"
                className="btn btn-outline btn-primary btn-wide space-x-2 font-semibold py-3 px-4 rounded-lg shadow-md transform hover:scale-105 hover:text-base-content transition duration-300">
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "currentColor", transform: "" }}>
                  <path d="M12 16l4-5h-3V4h-2v7H8z" />
                  <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z" />
                </svg>
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
