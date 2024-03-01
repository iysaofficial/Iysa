// Import CSS
import '../css/navigation.css';

import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaHouse } from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('hidden-scrolling');
  };

  const collapseSubMenu = () => {
    const activeSubMenu = document.querySelector(
      '.menu-item-has-children.active .sub-menu'
    );
    activeSubMenu.removeAttribute('style');
    activeSubMenu.parentElement.classList.remove('active');
  };

  const resizeFix = () => {
    if (isOpen) {
      toggleNav();
    }
    if (document.querySelector('.menu-item-has-children.active')) {
      collapseSubMenu();
    }
  };

  useEffect(() => {
    const mediaSize = 991;

    const handleToggleNav = () => {
      const navMenu = document.querySelector('.nav-menu');
      const menuOverlay = document.querySelector('.menu-overlay');
      navMenu.classList.toggle('open');
      menuOverlay.classList.toggle('active');
      toggleNav();
    };

    const handleMenuClick = (event) => {
      if (
        event.target.hasAttribute('data-toggle') &&
        window.innerWidth <= mediaSize
      ) {
        event.preventDefault();
        const menuItemHasChildren = event.target.parentElement;
        if (menuItemHasChildren.classList.contains('active')) {
          collapseSubMenu();
        } else {
          if (
            document.querySelector('.menu-item-has-children.active')
          ) {
            collapseSubMenu();
          }
          menuItemHasChildren.classList.add('active');
          const subMenu =
            menuItemHasChildren.querySelector('.sub-menu');
          subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth > mediaSize) {
        resizeFix();
      }
    };

    document
      .querySelector('.open-nav-menu')
      .addEventListener('click', handleToggleNav);
    document
      .querySelector('.close-nav-menu')
      .addEventListener('click', handleToggleNav);
    document
      .querySelector('.menu-overlay')
      .addEventListener('click', handleToggleNav);
    document
      .querySelector('.nav-menu')
      .addEventListener('click', handleMenuClick);
    window.addEventListener('resize', handleResize);

    return () => {
      document
        .querySelector('.open-nav-menu')
        .removeEventListener('click', handleToggleNav);
      document
        .querySelector('.close-nav-menu')
        .removeEventListener('click', handleToggleNav);
      document
        .querySelector('.menu-overlay')
        .removeEventListener('click', handleToggleNav);
      document
        .querySelector('.nav-menu')
        .removeEventListener('click', handleMenuClick);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="header-main">
        <div className="logo">
          <img src="./assets/images/logo/navigation-logo.WebP" />
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
            <li className="menu-item">
              <a href="/About">About</a>
            </li>
            <li className="menu-item">
              <a href="/CalenderEvent">Calender Event</a>
            </li>
            {/* <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Curation <FaChevronDown />
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a href="/CurationOSPC">Curation OSPC</a>
                </li>
                <li className="menu-item">
                  <a href="/CurationLKTIN">Curation LKTIN</a>
                </li>
              </ul>
            </li> */}
            {/* <li className="menu-item">
              <a href="/Curasi"> Curation News</a>
            </li> */}
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Our Team
                <FaChevronDown />
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a href="/ExpertTeam">IYSA Expert Team</a>
                </li>
                {/* <li className="menu-item">
                    <a href="/ExpertStaff">Expert Staff</a>
                  </li> */}
              </ul>
            </li>
            <li className="menu-item">
              <a href="/NewsletterPage">Newsletter</a>
            </li>
            <li className="menu-item menu-item-has-children">
              <a href="#" data-toggle="sub-menu">
                Gallery <FaChevronDown />
              </a>
              <ul className="sub-menu text-center">
                <li className="menu-item">
                  <a href="/GalleryPhoto">Photo</a>
                </li>
                <li className="menu-item">
                  <a href="/GalleryVideo">Video</a>
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
      {/* </div> */}
    </header>
  );
};
export default Navigation;
