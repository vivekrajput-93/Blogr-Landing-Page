import React, { useEffect, useState } from "react";
import logo from "../images/logo.svg";
import Button from "./Button";
import { footer } from "../data/data";
import Menu from "./Menu";

const Header = () => {
  const [nav, setNav] = useState(footer);

  const [isOpen, setIsOpen] = useState(false);

  const [width, setWidth] = useState(768);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
    }
  });

  return (
    <header className="absolute p-5 flex items-center justify-between w-full">
      <div>
        <img src={logo} alt="logo" />
      </div>
      {isOpen && (
        
          <nav className="navbar md:flex md:justify-between">
            <ul>
              {nav.map(({ id, title, links }) => (
                <li key={id}>{title}</li>
              ))}
              <Button />
            </ul>
          </nav>
        
      )}

      <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};

export default Header;
