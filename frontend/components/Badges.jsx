import React from "react";

export default function Badges() {
  return (
    <>
      {/*<!-- Component: Three columns even layout --> */}
      <section className="min-h bg-base-100">
        <div className="container px-6 m-auto text-center">
          <h1 class="text-5xl p-10 font-bold">Certificate</h1>

          <div className="carousel carousel-center rounded-box">
            <div className="carousel-item">
              <img src="https://picsum.photos/id/1081/800/600" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/id/1081/800/600" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/id/1081/800/600" alt="Pizza" />
            </div>
            <div className="carousel-item">
              <img src="https://picsum.photos/id/1081/800/600" alt="Pizza" />
            </div>
          </div>
        </div>
      </section>
      {/*<!-- End Three columns even layout --> */}
    </>
  );
}
