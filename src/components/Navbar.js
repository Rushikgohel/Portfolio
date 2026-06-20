import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo1.png";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineAppstore,
  AiFillStar,
} from "react-icons/ai";

import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <AiOutlineHome />,
    },
    {
      name: "About",
      path: "/about",
      icon: <AiOutlineUser />,
    },
    {
      name: "Projects",
      path: "/project",
      icon: <AiOutlineFundProjectionScreen />,
    },
    {
      name: "Services",
      path: "/Services",
      icon: <AiOutlineAppstore />,
    },
    {
      name: "Resume",
      path: "/resume",
      icon: <CgFileDocument />,
    },
  ];

  const isActive = (path) => {
    return location.pathname.toLowerCase() === path.toLowerCase();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${sticky
          ? "bg-gray-900 shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-12 object-contain"
            />


          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-8">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-2 text-lg font-medium transition duration-300 ${isActive(item.path)
                    ? "nav-link-active-blink"
                    : "text-white hover:text-purple-400"
                  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

          </div>

          {/* GitHub Button */}

          <a
            href="https://github.com/rushikgohel/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded-full text-white transition"
          >
            <CgGitFork />
            <AiFillStar />
          </a>

          {/* Mobile Button */}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}

        {isOpen && (
          <div className="md:hidden bg-gray-900 rounded-lg pb-5">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-6 py-4 text-lg ${isActive(item.path)
                    ? "nav-link-active-blink"
                    : "text-white"
                  }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}

            <a
              href="https://github.com/rushikgohel/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-6 mt-3 flex justify-center items-center gap-2 bg-purple-600 py-3 rounded-lg text-white"
            >
              <CgGitFork />
              <AiFillStar />
            </a>

          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;