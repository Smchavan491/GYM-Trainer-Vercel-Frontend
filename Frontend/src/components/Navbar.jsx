import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-3 px-10 bg-gray-900 fixed w-full top-0 z-50 shadow-md">
      <h1 className="text-3xl font-bold text-red-500">IronFit</h1>

      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          <span className="text-white text-2xl">☰</span>
        </button>
      </div>

      <ul
        className={`md:flex md:space-x-8 absolute md:static bg-gray-900 w-full left-0 md:w-auto transition-all duration-300 ${
          menuOpen ? "top-12" : "top-[-300px]"
        }`}
      >
        {["Home", "Services", "Testimonials", "Contact"].map((item) => (
          <li key={item} className="text-center py-1 md:py-0">
            <a
              href={`#${item.toLowerCase()}`}
              className="hover:text-red-500 text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
