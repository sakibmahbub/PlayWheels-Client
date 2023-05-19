import { useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#ffffff] mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-20 relative rounded-lg z-20">
      <div className="relative flex items-center justify-between">
        <Link to="/" className="inline-flex items-center">
          <img
            className="w-32 h-32"
            src="https://i.ibb.co/K78JKYy/1.png"
            alt="playwheels"
          />
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center font-semibold hidden space-x-8 lg:flex uppercase">
          <li>
            <NavLink
              to="/"
              className={
                location.pathname === "/" ? "text-[#BC1823]" : "default"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alltoys"
              className={
                location.pathname === "/alltoys" ? "text-[#BC1823]" : "default"
              }
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mytoys"
              className={
                location.pathname === "/mytoys" ? "text-[#BC1823]" : "default"
              }
            >
              My Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addatoy"
              className={
                location.pathname === "/addatoy" ? "text-[#BC1823]" : "default"
              }
            >
              Add A Toy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={
                location.pathname === "/blog" ? "text-[#BC1823]" : "default"
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            {user && (
              <button
                className="btn bg-yellow-500 btn-sm border-none"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            {!user && (
              <Link to="/login">
                <button className="btn bg-yellow-500 btn-sm border-none">
                  Login
                </button>
              </Link>
            )}
          </li>
          <li>
            {user && (
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    title={user.displayName}
                  />
                </div>
              </label>
            )}
          </li>
        </ul>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-8 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Play<span className="text-yellow-500">Wheels</span>
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-8 text-red-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/alltoys" className="default">
                        All Toys
                      </Link>
                    </li>
                    <li>
                      <Link to="/mytoys" className="default">
                        My Toys
                      </Link>
                    </li>
                    <li>
                      <Link to="/addatoy" className="default">
                        Add A Toy
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      {user && (
                        <button
                          className="btn bg-yellow-500 btn-sm border-none"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      )}
                      {!user && (
                        <Link to="/login">
                          <button className="btn bg-yellow-500 btn-sm border-none">
                            Login
                          </button>
                        </Link>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
