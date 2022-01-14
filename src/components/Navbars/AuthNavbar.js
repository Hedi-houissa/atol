/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

// components

import PagesDropdown from "components/Dropdowns/PagesDropdown.js";
import ReactPDF from "@react-pdf/renderer";
import { Mypdf } from "../../views/admin/Mypdf";

export default function Navbar(props) {
  const [getToken, setgetToken] = useState(
    JSON.parse(localStorage.getItem("token"))
  );
  const [username, setusername] = useState('null')
  // getToken && setusername(getToken.username) 
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Danya conseil
            </Link>
            { getToken != null && (
              <Link
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                to="/admin/dashboard"
              >
                Mon espace
              </Link>
            )}
            
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            
          </div>
        </div>
      </nav>
    </>
  );
}
