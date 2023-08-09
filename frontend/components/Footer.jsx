import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content">
        <div>
          <p>Copyright © {currentYear} - All right reserved by Enrico Findley</p>
        </div>
      </footer>
    </>
  );
}
