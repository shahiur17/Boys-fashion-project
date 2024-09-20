import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isTshirtMenuOpen, setIsTshirtMenuOpen] = useState(false);

  const toggleTshirtMenu = () => {
    setIsTshirtMenuOpen(!isTshirtMenuOpen);
  };

  return (
    <div className="navbar bg-black text-white font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-black text-white font-bold rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <button
                onClick={toggleTshirtMenu}
                className="hover:text-blue-500"
              >
                T-shirt
              </button>
              {isTshirtMenuOpen && (
                <ul className="pl-4">
                  <li>
                    <Link to="/dropsolder" className="hover:text-blue-500">
                      Drop-shoulder
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/manshirt" className="hover:text-blue-500">
                Man's Shirt
              </Link>
            </li>
            <li>
              <Link to="/panjabi" className="hover:text-blue-500">
                Panjabi
              </Link>
            </li>
            <li>
              <Link to="/jeans" className="hover:text-blue-500">
                Jeans Pants
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/home" className="btn btn-ghost">
          <img
            src="https://i.ibb.co/2svDFN7/B-1-removebg-preview-1.png"
            alt="Logo"
            className="h-14 hover:scale-125 transition-transform duration-300"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">
          <li className="group">
            <Link to="/tshirt" className="hover:text-blue-500">
              T-shirt
            </Link>
            <ul className="hidden group-hover:block pl-4">
              <li>
                <Link to="/dropsolder" className="hover:text-blue-500">
                  Drop-shoulder
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/manshirt" className="hover:text-blue-500">
              Man's Shirt
            </Link>
          </li>
          <li>
            <Link to="/panjabi" className="hover:text-blue-500">
              Panjabi
            </Link>
          </li>
          <li>
            <Link to="/jeans" className="hover:text-blue-500">
              Jeans Pants
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle hover:scale-125 transition-transform duration-300"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-black text-white font-bold z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar hover:scale-125 transition-transform duration-300"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white font-bold rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="hover:text-blue-500 justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="hover:text-blue-500">Settings</a>
              </li>
              <li>
                <a className="hover:text-blue-500">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
