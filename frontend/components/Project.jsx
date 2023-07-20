import React from "react";
import Card from "@/components/Card";

export default function Project() {
  return (
    <>
      {/*<!-- Component: Three columns even layout --> */}
      <section className="min-h-screen p-10 bg-base-200">
        <div className="container px-6 m-auto text-center">
          <h1 class="text-5xl p-10 font-bold">Projects</h1>
          <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 ">
            <div className="col-span-4">
              <Card />
            </div>
            <div className="col-span-4">
              <Card />
            </div>
            <div className="col-span-4">
              <Card />
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Three columns even layout --> */}
    </>
  );
}
