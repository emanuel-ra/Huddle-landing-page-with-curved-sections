import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

import footer_top_desktop from "./assets/bg-footer-top-desktop.svg";
import footer_top_mobile from "./assets/bg-footer-top-mobile.svg";

import logo from "./assets/logo-white.svg";

import phone from "./assets/icon-phone.svg";
import email from "./assets/icon-email.svg";


function Footer() {
  return (
    <footer className="mt-44">
      <picture>
        <source srcSet={footer_top_mobile} media="(max-width: 375px)" />
        <img src={footer_top_desktop} alt="" />
      </picture>

        <section className="w-full bg-very-dark-cyan">
            <article className="text-white">
                <img src={logo} alt="Logo" />
                <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
                </blockquote>
                <section className="flex space-x-2">
                    <img src={phone} alt="Phone" /> Phone: +1-543-123-4567
                </section>
                <section className="flex space-x-2">
                    <img src={email} alt="Phone" /> example@huddle.com
                </section>
                <section className="flex space-x-2">
                    <FaFacebookSquare size={50} />
                    <FaInstagram size={50} />
                    <FaTwitterSquare size={50} />
                </section>
            </article>
            <article>

            </article>
        </section>

    </footer>
  );
}

export default Footer;
