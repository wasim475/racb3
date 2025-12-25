import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className='bangla'>
            কপিরাইট © {new Date().getFullYear()} -ওয়াসিফ এন. নাফি। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
