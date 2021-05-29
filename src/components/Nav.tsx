import Logo from "./assets/Logo";
import { useState } from "react";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className=" w-098 h-16 flex items-center justify-between  z-30 pt-5 ">
      <div className="xl:ml-8 w-12  flex justify-between ml-4 ">
        <Logo />
      </div>
      <div className="bg-augusta-brown w-auto h-auto z-10 rounded mr-5">
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
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      {/* ONLY SHOW AT LARGE SCREENS */}
      <ul className="hidden text-augusta-white  w-96 xl:flex justify-between items-center border-b-2 border-solid border-augusta-white pb-1">
        <li>
          <button className="bg-augusta-red p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out ">
            Home
          </button>
        </li>
        <li>
          <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
            About
          </button>
        </li>
        <li>
          <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
            Contact
          </button>
        </li>
        <li>
          <button className="p-1.5 rounded text-center hover:bg-augusta-blue  transition ease-in-out">
            Sign In
          </button>
        </li>
        <li className="invisible">Sign</li>
      </ul>

      {/* MOBILE MENU */}
      <div className="absolute w-098 h-auto invisible bg-augusta-white flex flex-col justify-center items-center ">
        <ul className="xl:hidden   flex flex-col pt-40  justify-around  ">
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
          <li className="pb-1">
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
