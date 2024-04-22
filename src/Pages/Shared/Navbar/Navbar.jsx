import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

import logo from "../../../assets/images/hotel rent.png";

import { AuthContext } from "../../../Authentication/AuthProvider";
const NavBar = () => {
  // --------theme---------
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    if (currentTheme === "valentine") {
      htmlElement.setAttribute("data-theme", "cupcake");
    } else {
      htmlElement.setAttribute("data-theme", "valentine");
    }
  };

  const { user, logOut } = useContext(AuthContext);

  // const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">share room</Link>
      </li>
      <li>
        <Link to="/order/salad">Faq</Link>
      </li>

      {user && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}

      <li>
        <Link to="/dashboard/">
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar  shadow-lg z-10 max-w-screen-2xl  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <a className=" bg-transparent normal-case text-xl">
              <img className="w-20 h-14" src={logo} alt="" />
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        {/* ----------navbar end---------- */}
        <div className="navbar-end gap-2">
          {user ? (
            <>
              {/* */}
              <div className="dropdown">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="w-14 rounded-full"
                    src={user?.photoURL}
                    alt="image"
                  />
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content z-[1] card card-compact -ml-20 w-64 p-2 shadow bg-slate-950 text-primary-content"
                >
                  <div className="card-body  text-black bg-[#ffe] ">
                    <h3 className="text-lg">
                      <span>Name:- {user?.displayName}</span>{" "}
                    </h3>
                    <p>Gmail:- {user?.email}</p>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-secondary"
                    >
                      LogOut
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <li className="">
                <Link to="/login">
                  <button className="btn btn-neutral">Login or Signup</button>
                </Link>
              </li>
            </>
          )}

          <label className="flex cursor-pointer gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
            <input
              type="checkbox"
              value={isDarkMode}
              className="toggle theme-controller"
              onClick={toggleTheme}
            />

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
          </label>
        </div>
      </div>
    </>
  );
};

export default NavBar;
