import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white w-screen --1px-border-color">
      <div className="p-5 flex justify-between items-center">
        {/* Logo container */}
        <div>
          <h1 className="--text-color-secondary font-bold text-2xl">LOGO</h1>
        </div>

        {/* Content */}
        <div className="flex justify-end gap-[71px] items-center">
          <ul className="flex justify-end gap-[71px] text-sm">
            <li className="relative">
              <Link
                to="/"
                className={`${location.pathname == "/" && "text-[#1090cb]"}`}
              >
                {location.pathname == "/" && (
                  <span className="rounded-4xl absolute --bg-color-primary block h-2 w-2 -top-1 -left-2.5 animate-bounce" />
                )}
                Home
              </Link>
            </li>

            <li className="relative">
              <Link
                to="/about"
                className={`${
                  location.pathname == "/about" && "text-[#1090cb]"
                }`}
              >
                {location.pathname == "/about" && (
                  <span className="rounded-4xl absolute --bg-color-primary block h-2 w-2 -top-1 -left-2.5 animate-bounce" />
                )}
                About us
              </Link>
            </li>

            <li className="relative">
              <Link
                to="/services"
                className={`${
                  location.pathname == "/services" && "text-[#1090cb]"
                }`}
              >
                {location.pathname == "/services" && (
                  <span className="rounded-4xl absolute --bg-color-primary block h-2 w-2 -top-1 -left-2.5 animate-bounce" />
                )}
                Services
              </Link>
            </li>

            <li className="relative">
              <Link
                to="/contact"
                className={`${
                  location.pathname == "/contact" && "text-[#1090cb]"
                }`}
              >
                {location.pathname == "/contact" && (
                  <span className="rounded-4xl absolute --bg-color-primary block h-2 w-2 -top-1 -left-2.5 animate-bounce" />
                )}
                Blog
              </Link>
            </li>
          </ul>

          <div>
            <button className="--bg-secondary-color text-white pt-[11px] pb-[11px] p-[26px] rounded-[10px]">
              <span>Contact us</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
