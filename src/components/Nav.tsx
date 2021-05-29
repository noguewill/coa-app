import Logo from "./assets/Logo";
import { useState } from "react";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className=" w-098 h-16 flex items-center justify-between  z-30 pt-5 ">
      <div className="xl:ml-8 w-12  flex justify-between ml-4 ">
        <Logo />
      </div>
      <button
        className="bg-augusta-brown w-auto h-auto z-10 rounded mr-5"
        onClick={() => setMenuActive(!menuActive)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="xl:hidden h-8 w-8 z-10 text-augusta-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={`${
              !menuActive ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"
            }`}
          />
        </svg>
      </button>
      {/* ONLY SHOW AT LARGE SCREENS */}
      <div className="hidden xl:block">
        <ul className=" text-augusta-white  w-96 flex justify-between items-center pb-1">
          <li className="navMenuItem  opacity-0">
            <button className="bg-augusta-red p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out ">
              Home
            </button>
          </li>
          <li className="navMenuItem2 delay-6000 opacity-0">
            <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
              About
            </button>
          </li>
          <li className="navMenuItem3 delay-7000  opacity-0">
            <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
              Contact
            </button>
          </li>
          <li className="navMenuItem4 opacity-0">
            <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
              Sign In
            </button>
          </li>
          <li className="invisible">Sign</li>
        </ul>
        <span className="navMenuItem_bottomBorder block w-0 h-0.5 bg-augusta-white "></span>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
        ${!menuActive ? "invisible" : ""} 
        absolute w-098 h-auto flex flex-col justify-center items-center
        bg-augusta-white `}
      >
        <ul className="xl:hidden   flex flex-col pt-40  justify-around items-center ">
          <li className="pb-1">
            <button className="bg-augusta-red p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out ">
              Home
            </button>
          </li>
          <li className="pb-1">
            <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
              About
            </button>
          </li>
          <li className="pb-1">
            <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
              Contact
            </button>
          </li>
          <li className="pb-5">
            <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
