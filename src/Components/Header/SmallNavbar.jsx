import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaCartPlus, FaPhone, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchAlertDialog from "./_Components/SearchAlertDialog";

const SmallNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); // Close menu
      }
    };

    // Add event listener to detect clicks outside the menu
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Function to handle link click
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu
  };

  return (
    <div className="bg-[#141414] py-3 px-2 lg:hidden sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to='/'><img src="/logo.png" className="w-10" alt="Electro Hub Logo" /></Link>
          <p className="text-sm text-white font-bold ml-2">
            ELECTRO <span className="text-xl text-red-600">HUB</span>
          </p>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="flex justify-between items-center gap-8 pr-1">
          <SearchAlertDialog />
          <Link to='/cart'><FaCartPlus className="text-white text-2xl" /></Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />} {/* Conditional rendering */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={menuRef} className="mt-2 w-full"> {/* Attach ref here */}
          <div className="w-1/2 relative">
            <div className="w-full absolute z-50 bg-[#141414] mt-3 -left-2">
            <ul className="w-full bg-[#141414] mt-3 z-50">
            {['about', 'team', 'pricing', 'appointment', 'gallery', 'faq', 'service', 'blog', 'product', 'checkout', 'contact', 'setting', 'login'].map((link) => (
                  <li key={link}>
                    <Link
                      className="rounded-t text-white hover:bg-red-600 hover:py-2 hover:mb-2 hover:text-white px-6 text-sm pb-4 font-medium block whitespace-no-wrap"
                      to={`/${link}`}
                      onClick={handleLinkClick} // Close menu on link click
                    >
                      {link.charAt(0).toUpperCase() + link.slice(1)} {/* Capitalize first letter */}
                    </Link>
                  </li>
                ))}
            </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmallNavbar;
