import { NavLink, Link } from "react-router-dom";
import Dp from "../../assets/download.webp";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
  const context = useContext(AuthContext);

  const { user, signOutUser } = context;

  const navLinks = (
    <>
      <NavLink className="mr-3 text-lg font-semibold " to="/">
        Home
      </NavLink>
      {user && (
        <>
          <NavLink className="mr-3 text-lg font-semibold " to="/online_book">
            Book online
          </NavLink>
          <NavLink className="mr-3 text-lg font-semibold " to="/gallery">
            Gallery
          </NavLink>
        </>
      )}
      {!user && (
        <>
          <NavLink className="mr-3 text-lg font-semibold " to="/login">
            Login
          </NavLink>
          <NavLink className="mr-3 text-lg font-semibold " to="/register">
            Register
          </NavLink>
        </>
      )}
      <NavLink className="mr-3 text-lg font-semibold " to="/our_team">
        Our Team
      </NavLink>
      <NavLink to="/about_us " className="text-lg font-semibold ">
        About Us
      </NavLink>
    </>
  );

  const handleLogout = () => {
    signOutUser()
      .then((result) => console.log("logout", result))
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar bg-primarySecondColor p-5">
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
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {user && (
              <div className="w-10 rounded-full mr-3 md:hidden flex mb-2">
                <img
                  className="rounded-full"
                  src={user.photoURL ? user.photoURL : Dp}
                />
                <p className="ml-3">{user.displayName}</p>
              </div>
            )}
            {navLinks}

            {user && (
              <div onClick={handleLogout} className="btn md:hidden flex mt-2">
                Logout
              </div>
            )}
          </div>
        </div>
        <Link to="/" className="flex items-center gap-3">
          <h2 className="text-5xl font-extrabold text-primaryFirstColor ">E</h2>
          <p className="text-2xl font-extrabold text-primaryThreeColor">
            planner
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal px-1">{navLinks}</div>
      </div>

      <div className="navbar-end hidden md:flex">
        {user && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL ? user.photoURL : Dp} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p>{user.displayName}</p>
              </li>

              <li onClick={handleLogout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
