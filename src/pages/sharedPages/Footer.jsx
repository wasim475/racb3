import React from "react";
import PrivacyPolicy from './PrivacyPolicy';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside className='flex justify-between items-center gap-x-4'>
          <p className='bangla'>
            কপিরাইট © {new Date().getFullYear()} -ওয়াসিফ এন. নাফি। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <Link to={`/privacy-policy`} className='text-cyan-500 text-sm'>প্রাইভেসি ও পলিসি</Link>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
