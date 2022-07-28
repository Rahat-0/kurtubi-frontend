import React from "react";
import { FaFacebookF, FaYoutube, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGlobeAsia, FaFacebookMessenger } from "react-icons/fa";
const Footer = () => {
  const contactLink = [
    { link: "facebook", logo: <FaFacebookF fill="#fff" className="w-10 h-10 p-2" /> },
    { link: "youtube", logo: <FaYoutube fill="#fff" className="w-10 h-10 p-2" /> },
    { link: "twitter", logo: <FaTwitter fill="#fff" className="w-10 h-10 p-2" /> },
    { link: "google", logo: <FaGoogle fill="#fff" className="w-10 h-10 p-2" /> },
    { link: "instagram", logo: <FaInstagram fill="#fff" className="w-10 h-10 p-2" /> },
    { link: "linkedin", logo: <FaLinkedin fill="#fff" className="w-10 h-10 p-2" /> },
    { link: "rahat.nuisters.com", logo: <FaGlobeAsia fill="#fff" className="w-10 h-10 p-2" /> },
    { link: "facebookmessenger", logo: <FaFacebookMessenger fill="#fff" className="w-10 h-10 p-2" /> },
  ];
  return (
    <div className="bg-gray-900">
      <div className=" text-white grid md:grid-cols-2 xl:grid-cols-4 md:p-20 md:place-items-center md:items-start ">
        <div className="">
          <h5 className="text-3xl font-bold py-7 px-4">Get in Touch</h5>
          <ul className="list-disc px-10 leading-8">
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Campus Contact
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Meet With Us
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Privacy Statement
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Report Copyright Infringement
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Report on Security Issues
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Recom. For Traffic Mgt
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Newsletters
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Location Map
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Covid-19 updates
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-3xl font-bold py-7 px-4">Branding</h5>
          <ul className="list-disc px-10 leading-8 text-gray-300">
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Campus Contact
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Meet With Us
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Privacy Statement
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Report Copyright Infringement
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Report on Security Issues
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Recom. For Traffic Mgt
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Newsletters
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Location Map
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Covid-19 updates
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-3xl font-bold py-7 px-4">Useful Links</h5>
          <ul className="list-disc px-10 leading-8 text-gray-300">
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Campus Contact
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Meet With Us
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Privacy Statement
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Report Copyright Infringement
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Report on Security Issues
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Recom. For Traffic Mgt
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Newsletters
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Location Map
              </a>
            </li>
            <li>
              <a className="text-gray-300 hover:text-white" href="##">
                Covid-19 updates
              </a>
            </li>
          </ul>
        </div>

        <div className="">
          <h5 className="text-3xl font-bold py-7 px-4">Subscribe Us!</h5>
          <form className="p-4 space-y-3">
            <input
              data-aos="fade-up"
              className="block w-full p-4 bg-gray-700 outline-none border hover:border-yellow-400"
              placeholder="Enter your email address"
              type="email"
            />
            <input
              data-aos="fade-down"
              className="block w-full p-4 font-bold text-2xl bg-blue-900 cursor-pointer border hover:bg-transparent hover:border-yellow-400"
              type="submit"
              value="Subscribe"
            />
          </form>
          <h6 className="text-3xl font-bold py-7 px-4">Connect With Us</h6>
          <ul  className="px-4 inline-grid grid-cols-6 sm:grid-cols-8 md:grid-cols-4 xl:grid-cols-5 place-items-end space-x-2 text-gray-300">
            {contactLink.map(({ link, logo }) => (
              <li data-aos="fade-up" key={link}>
                <a href={link} target="blank">
                  <span className="  inline-block bg-gray-600 p-1 rounded-full">
                    {logo}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        style={{ height: "1px" }}
        className="mt-32 md:mx-20 xl:mx-24 md:mt-2 bg-gray-300"
      ></div>
      <p className="text-center pb-28 text-xl p-4 text-white">
        Copyright © 2022 Kurtubi Madrasah, Tangail. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
