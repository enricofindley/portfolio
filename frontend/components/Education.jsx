"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Education() {
  return (
    <>
      <section className="min-h-screen p-10 bg-base-100 ">
        <div className="container px-6 m-auto items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}>
            <h1 class="text-5xl font-bold text-center pb-10">Education</h1>
          </motion.div>

          {/*<!-- Component: Alternative Changelog feed --> */}

          <div className="flex flex-col w-full lg:flex-row lg:ml-40">
            <motion.div
              whileInView={{ opacity: 1, x: 20 }}
              initial={{ opacity: 0, x: -40 }}
              transition={{ duration: 1, ease: "easeOut" }}>
              <div className="grid flex-grow place-items-center pb-10">
                <img src="/education.webp" alt="Education" className="w-96" />
              </div>
            </motion.div>

            <div className="grid flex-grow place-items-center">
              <div className="flex justify-center items-center">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 40 }}
                  transition={{ duration: 1, ease: "easeOut" }}>
                  <ul
                    aria-label="User feed"
                    role="feed"
                    className="relative flex flex-col gap-12 py-12 pl-8 before:absolute before:top-0 before:left-8 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-8 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 ">
                    <li role="article" className="relative pl-8 ">
                      <div className="flex flex-col flex-1 gap-4">
                        <a
                          href="https://darmajaya.ac.id/"
                          target="_blank"
                          className="absolute z-20 inline-flex items-center justify-center w-16 h-16 text-white rounded-full -left-8 ring-2 ring-white">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/id/7/7b/Logo-Darmajaya-new.png"
                            alt="Informatics & Business Institute Darmajaya"
                            title="Informatics & Business Institute Darmajaya"
                            className="max-w-full rounded-full"
                          />
                        </a>
                        <h4 className="ml-4 flex flex-col items-start text-lg font-medium leading-8 text-emerald-500 md:flex-row lg:items-center">
                          <span className="flex-1">Master of Computer Science</span>
                          <span> 2023</span>
                        </h4>
                        <p className="ml-4 text-white-500">
                          Check out my thesis project{" "}
                          <a
                            target="_blank"
                            className="link link-hover link-secondary"
                            href="http://repo.darmajaya.ac.id/11576/">
                            here.
                          </a>
                        </p>
                      </div>
                    </li>
                    <li role="article" className="relative pl-8 ">
                      <div className="flex flex-col flex-1 gap-4">
                        <a
                          target="_blank"
                          href="https://unpar.ac.id/"
                          className="absolute z-20 inline-flex items-center justify-center w-16 h-16 text-white rounded-full -left-8 ring-2 ring-white">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/id/thumb/8/88/UNPAR_LOGO.svg/512px-UNPAR_LOGO.svg.png"
                            alt="Parahyangan Catholic University"
                            title="Parahyangan Catholic University"
                            className="max-w-full rounded-full"
                          />
                        </a>
                        <h4 className="ml-4 flex flex-col items-start text-lg font-medium leading-8 text-emerald-500 md:flex-row lg:items-center">
                          <span className="flex-1">Bachelor of Computer Science</span>
                          <span> 2020</span>
                        </h4>
                        <p className="ml-4 text-white-500">
                          Check out my undergraduate thesis project{" "}
                          <a
                            target="_blank"
                            className="link link-hover link-secondary"
                            href="https://repository.unpar.ac.id/handle/123456789/10828">
                            here.
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                  {/*<!-- End User feed --> */}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
