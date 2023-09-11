import { useEffect, useRef, useState } from 'react';
import logo from '../assets/images/logo.svg';

function Header() {
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 70) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.padding = "32px 0";
      }
    })
  }, [])
  return (
    <header ref={headerRef} className="p-8 fixed top-0 left-0 z-50 transition-all duration-300 w-full">
      <div className="container flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img className="h-8" src={logo} alt="logo-img" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map(link => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`} className="text-white opacity-[0.9] hover:opacity-100 font-normal hover:underline transition-all duration-300">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;