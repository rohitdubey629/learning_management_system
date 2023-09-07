import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div>
      <footer className="relative left-0 bottom-0 h-[10vh] py-4 bg-gray-800 text-white flex flex-col sm:flex-row item-center justify-between ">
        <section className="text-lg">
          Copyright {year} | All right reserve
        </section>
        <section className="flex item-center justify-center gap-5 text-2xl text-white ">
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsFacebook />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsInstagram />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsLinkedin />
          </a>
          <a className="hover:text-yellow-500 transition-all ease-in-out duration-300">
            <BsTwitter />
          </a>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
