import { useState } from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

import footer_top_desktop from "./assets/bg-footer-top-desktop.svg";
import footer_top_mobile from "./assets/bg-footer-top-mobile.svg";

import logo from "./assets/logo-white.svg";

import phone from "./assets/icon-phone.svg";
import email_icon from "./assets/icon-email.svg";

import validator from "validator";

function Footer() {
  let [email, setEmail] = useState(true);

  let subscribe = () => {
    let element = document.getElementById("email");
    let flag = validator.isEmail(element.value);
    setEmail(flag);
  };

  return (
    <footer className="mt-44">
      <picture>
        <source srcSet={footer_top_mobile} media="(max-width: 375px)" />
        <img src={footer_top_desktop} alt="" />
      </picture>

      <section className="w-full bg-very-dark-cyan grid grid-cols-1 lg:grid-cols-2 px-32 pt-24">
        <article className="text-white p-10 space-y-5 ">
          <img src={logo} alt="Logo" />
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit. Mauris nulla quam, hendrerit <br />
            lacinia vestibulum a, ultrices quis sem.
          </blockquote>

          <section className="flex space-x-4">
            <img src={phone} className="w-7" alt="Phone" />{" "}
            <span>Phone: +1-543-123-4567</span>
          </section>

          <section className="flex space-x-4">
            <img src={email_icon} className="w-7" alt="Phone" />{" "}
            <span>example@huddle.com</span>
          </section>

          <section className="flex space-x-2">
            <FaFacebookSquare
              size={30}
              className="hover:text-blue-500 cursor-pointer"
            />
            <FaInstagram
              size={30}
              className="hover:text-blue-500 cursor-pointer"
            />
            <FaTwitterSquare
              size={30}
              className="hover:text-blue-500 cursor-pointer"
            />
          </section>
        </article>

        <article className="p-5 space-y-5 ">
          <h3 className="text-white text-2xl font-semibold">NEWSLETTER</h3>
          <blockquote className="text-white">
            To recieve tips on how to grow your community, <br />
            sign up to our weekly newsletter. We’ll never send <br />
            you spam or pass on your email address
          </blockquote>
          <div className="flex flex-col">
            <div className="flex w-full space-x-5">
              <input
                type="text"
                id="email"
                className={`p-2 w-[80%] rounded-md ${
                  !email ? "input-error" : ""
                }`}
              />
              <button
                className="py-2 px-10 text-white rounded-md shadow-lg hover:mix-blend-screen bg-pink"
                onClick={subscribe}
              >
                Subscribe
              </button>
            </div>
            <span
              className={`text-red-500 ${!email ? "opacity-100" : "opacity-0"}`}
            >
              Check your email please
            </span>
          </div>
        </article>

        <article className="col-span-2 text-center">
          <p class="text-white">
            Challenge by <a className="text-pink" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a className="text-pink" target="_blank" href="https://github.com/emanuel-ra">Tomas Emanuel Ramirez Abarca</a>.
          </p>
        </article>
      </section>

    </footer>
  );
}

export default Footer;
