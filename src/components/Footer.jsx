import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from '../assets/images/logo.svg';
import phoneicon from '../assets/images/icon-phone.svg';
import emailicon from '../assets/images/icon-email.svg';
import location from '../assets/images/icon-location.svg';

function Footer() {
  const [contact, setContact] = useState([
    { icon: phoneicon,  text: "+20121212121" },
    { icon: emailicon, text: "example@fylo.com" },
  ]);
  const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);
  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);

  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white ">
    <div className="container">
      <a href="/" className="block w-fit">
        <img
          src={logo}
          alt="logo-img"
          className="w-[175px] h-[66px] object-contain"
        />
      </a>
      <div className="flex justify-between flex-wrap flex-col md:flex-row gap-[30px] mt-[30px]">
        <div className="flex items-start gap-[15px] w-[340px] max-w-full">
          <img
            src={location}
            alt="location-img"
            className="w-[18px] h-[18px] object-contain"
          />
          <p className=" font-normal text-sm tracking-[0.8px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            nisi dignissimos unde ipsam modi facilis nam magni, assumenda ad
            fuga.
          </p>
        </div>
        <div>
          {contact.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
            >
              <img
                src={item.icon}
                alt="icon"
                className="w-[18px] h-[18px] object-contain"
              />
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
          {links.map((item) => (
            <li key={item}>
              <a
                href={item.toLowerCase()}
                className=" hover:text-primary transition-all duration-200 text-base"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-[15px] w-full justify-center md:w-auto">
          {socialIcons.map((item) => (
            <li key={item}>
              <a href={item} className="group">
                <div className="w-[40px] h-[40px] flex justify-center items-center border border-white rounded-[50%]">
                  {item === "facebook" ? (
                    <FaFacebookF className="  group-hover:text-primary transition-all duration-200" />
                  ) : item === "twitter" ? (
                    <FaTwitter className="  group-hover:text-primary transition-all duration-200" />
                  ) : (
                    <FaInstagram className="  group-hover:text-primary transition-all duration-200" />
                  )}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Footer;