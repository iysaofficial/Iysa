// Import CSS
import "../css/navigation.css";

import React, { useState, useEffect, useCallback } from "react";
import { FaChevronDown, FaHouse } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Stabilkan referensi dengan useCallback
  const toggleNav = useCallback(() => {
    setIsOpen((prev) => !prev);
    document.body.classList.toggle("hidden-scrolling");
  }, []);

  const collapseSubMenu = useCallback(() => {
    const activeSubMenu = document.querySelector(
      ".menu-item-has-children.active .sub-menu"
    );
    if (activeSubMenu) {
      activeSubMenu.removeAttribute("style");
      activeSubMenu.parentElement.classList.remove("active");
    }
  }, []);

  const resizeFix = useCallback(() => {
    if (isOpen) {
      toggleNav();
    }
    if (document.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  }, [isOpen, toggleNav, collapseSubMenu]);

  // ✅ Gunakan fungsi stabil dalam useEffect
  useEffect(() => {
    const mediaSize = 991;

    const handleToggleNav = () => {
      const navMenu = document.querySelector(".nav-menu");
      const menuOverlay = document.querySelector(".menu-overlay");
      navMenu?.classList.toggle("open");
      menuOverlay?.classList.toggle("active");
      toggleNav();
    };

    const handleMenuClick = (event) => {
      if (
        event.target.hasAttribute("data-toggle") &&
        window.innerWidth <= mediaSize
      ) {
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        if (menuItemHasChildren.classList.contains("active")) {
          collapseSubMenu();
        } else {
          if (document.querySelector(".menu-item-has-children.active")) {
            collapseSubMenu();
          }
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > mediaSize) {
        resizeFix();
      }
    };

    document
      .querySelector(".open-nav-menu")
      ?.addEventListener("click", handleToggleNav);
    document
      .querySelector(".close-nav-menu")
      ?.addEventListener("click", handleToggleNav);
    document
      .querySelector(".menu-overlay")
      ?.addEventListener("click", handleToggleNav);
    document
      .querySelector(".nav-menu")
      ?.addEventListener("click", handleMenuClick);
    window.addEventListener("resize", handleResize);

    return () => {
      document
        .querySelector(".open-nav-menu")
        ?.removeEventListener("click", handleToggleNav);
      document
        .querySelector(".close-nav-menu")
        ?.removeEventListener("click", handleToggleNav);
      document
        .querySelector(".menu-overlay")
        ?.removeEventListener("click", handleToggleNav);
      document
        .querySelector(".nav-menu")
        ?.removeEventListener("click", handleMenuClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, resizeFix, toggleNav, collapseSubMenu]);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dtik1z1qd/image/upload/v1767663839/navigation-logo_f6wxg6.png"
            alt="IYSA Navigation Logo"
          />
        </div>

        <div className="open-nav-menu">
          <span></span>
        </div>
        <div className="menu-overlay"></div>

        <nav className="nav-menu">
          <div className="close-nav-menu">
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <ul className="menu">
            <li className="menu-item mt-0">
              <a href="/">
                <FaHouse /> Home
              </a>
            </li>
            {/* <li className="menu-item">
              <a href="/About">About</a>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <p data-toggle="sub-menu" onClick={(e) => e.preventDefault()}>
                About <FaChevronDown />
              </p>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="/About">Overview</a>
                </li>
                <li className="menu-item">
                  <a href="/OurTeam">Our Team</a>
                </li>
                <li className="menu-item">
                  <a href="/ExpertTeam">IYSA Expert Team</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="/CalenderEvent">Calender Event</a>
            </li>

            <li className="menu-item menu-item-has-children">
              <p data-toggle="sub-menu" onClick={(e) => e.preventDefault()}>
                Our Events Website <FaChevronDown />
              </p>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="/AllEventWebPage">IYSA Events</a>
                </li>
                <li className="menu-item">
                  <a href="/AllEventAffiliationWebPage">
                    IYSA Events Affiliation
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-has-children">
              <p data-toggle="sub-menu" onClick={(e) => e.preventDefault()}>
                Our Events <FaChevronDown />
              </p>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="/AllEventPage">IYSA Events</a>
                </li>
                <li className="menu-item">
                  <a href="/AllEventAffiliation">IYSA Events Affiliation</a>
                </li>
              </ul>
            </li>

            <li className="menu-item menu-item-has-children">
              <p data-toggle="sub-menu" onClick={(e) => e.preventDefault()}>
                Event Info <FaChevronDown />
              </p>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a
                    href="https://drive.google.com/file/d/1JXtOT-MF64oCEdV1q8ocVopBu-dYk92X/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SK PTK 2025
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="/NewsletterPage">Newsletter</a>
            </li>

            <li className="menu-item menu-item-has-children">
              <p data-toggle="sub-menu" onClick={(e) => e.preventDefault()}>
                Gallery <FaChevronDown />
              </p>
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="/GalleryPhoto">Photo Events</a>
                </li>
                <li className="menu-item">
                  <a href="/GalleryVideo">Video Events</a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <a href="/FaqPage">FAQ</a>
            </li>
            <li className="menu-item">
              <a href="/ContactPage">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
