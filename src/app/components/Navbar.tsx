"use client";

import Logo from "@/app/public/favicon-16x16.png";
import Image from "next/image";

const Navbar = () => {
  const toggleNavbar = () => {
    const navbar = document.getElementById("navbar-default");
    if (navbar) {
      navbar.classList.toggle("hidden");
    }
  };

  return (
    <nav className="bg-dark_background text-foreground font-sans">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-2 pointer-events-none">
          <Image
            src={Logo}
            className="h5 w-5"
            alt="FinBiz logo"
            priority
          ></Image>
          <h1 className="text-2xl font-bold">FinBiz</h1>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-muted rounded-full md:hidden hover:bg-light_green hover:text-foreground focus:outline-none active:scale-95 transition-all duration-150 ease-in"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col space-y-1 md:space-y-0 text-muted font-medium text-md md:text-lg p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:px-0 md:hover:text-light_green rounded-xl hover:bg-light_green md:hover:bg-transparent hover:text-foreground transition-colors duration-150 ease-in"
                aria-current="page"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:px-0 md:hover:text-light_green rounded-xl hover:bg-light_green md:hover:bg-transparent hover:text-foreground transition-colors duration-150 ease-in"
              >
                Pages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:px-0 md:hover:text-light_green rounded-xl hover:bg-light_green md:hover:bg-transparent hover:text-foreground transition-colors duration-150 ease-in"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:px-0 md:hover:text-light_green rounded-xl hover:bg-light_green md:hover:bg-transparent hover:text-foreground transition-colors duration-150 ease-in"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:px-0 md:hover:text-light_green rounded-xl hover:bg-light_green md:hover:bg-transparent hover:text-foreground transition-colors duration-150 ease-in"
              >
                Pricing
              </a>
            </li>
            <li>
              <button
                type="button"
                className="block w-full md:hidden mt-4 nav-btn p-4 px-6 font-medium bg-background_btn text-btn_foreground rounded-full hover:scale-95 hover:bg-light_green hover:border-[#a9ed21] active:translate-y-1 transition-all duration-200 ease-linear"
              >
                <span>Get Started</span>
              </button>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="hidden w-full md:block md:w-auto nav-btn p-4 px-6 font-medium bg-background_btn text-btn_foreground rounded-full hover:scale-95 hover:bg-light_green hover:border-[#a9ed21] active:translate-y-1 transition-all duration-200 ease-linear"
        >
          <span>Get Started</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
