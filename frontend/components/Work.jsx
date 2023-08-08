"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Work() {
  return (
    <>
      <section className="min-h-screen p-10 bg-base-100">
        <div className="container px-6 m-auto items-center">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}>
            <h1 class="text-5xl font-bold text-center pb-10">Work Experience</h1>
          </motion.div>

          {/*<!-- Component: Alternative Changelog feed --> */}

          <div className="flex flex-col w-full lg:flex-row lg:ml-40">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -40 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <div className="grid flex-grow place-items-center pb-10">
                <img src="/work.webp" alt="Work" className="w-96" />
              </div>
            </motion.div>

            <div className="grid flex-grow place-items-center ">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 40 }}
                transition={{ duration: 1, ease: "easeOut" }}>
                <ul
                  aria-label="Changelog feed"
                  role="feed"
                  className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 ">
                  <li
                    role="article"
                    className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
                    <div className="flex flex-col flex-1 gap-4">
                      <h4 className="text-lg font-medium text-emerald-500">
                        Freelance Software Developer{" "}
                        <span className="text-lg font-normal text-white-500"> | 04/2023 - Current</span>{" "}
                      </h4>
                      <h4 className="font-medium text-emerald-500">Upwork Platform</h4>
                      <ul className="pl-5 list-disc text-slate-500 marker:text-emerald-500"></ul>
                    </div>
                  </li>
                  <li
                    role="article"
                    className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-emerald-500 before:ring-2 before:ring-white">
                    <div className="flex flex-col flex-1 gap-4">
                      <h4 className="text-lg font-medium text-emerald-500">
                        Software Engineer{" "}
                        <span className="text-lg font-normal text-white-500"> | 01/2021 - 12/2022</span>{" "}
                      </h4>
                      <h4 className="font-medium text-emerald-500">PT. Darmajaya Digital Solusi</h4>
                      <ul className="pl-5 list-disc text-white-500 marker:text-emerald-500">
                        <li>Cleaning excel data and export to database</li>
                        <li>Trained 200+ government administrator to use village information system</li>
                        <li>Taught and managed 10+ government administrator to maintain server and application</li>
                        <li>Deploy and maintain 100+ laravel and codeigniter application on server</li>
                        <li>Maintain full stack PHP dashboard web application</li>
                        <li>Develop front end for village information system</li>
                        <li>Develop full stack PHP web application</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
