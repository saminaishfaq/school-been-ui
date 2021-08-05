import React from "react";
import Sidebar from "../testing/SideBar";

import CustomInput from './Component/CustomInput';
import CustomProfileDropdown from "./Component/CustomProfileDropdown";

function TopBar() {
  return (
    <div className="antialiased relative min-h-screen lg:flex">
      <Sidebar />
      <div className="relative z-0 lg:flex-grow">
        <header className="bg-white-100 shadow-xl h-16   ">
          <span className="block text-2xl sm:text-2xl p-3">
            <a className="ml-0 text-black  flex items-start justify-start  hover:text-black px-3 py-2 rounded-md text-sm font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-stack"
                width={25}
                height={25}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
              </svg>
              <span className="text-sm ">
                <b className=""></b> School Name
              </span>

              <CustomInput />
              {/*<div>
                                
                                <img src="icon.png" className=" h-10 w-10  rounded-full border-2" alt=""/>
               
                         </div>*/}

              <div className="ml-3 relative">
                <img
                  src="bell icon.png"
                  className="  h-10 w-10  rounded-full border-2"
                  alt=""
                />
              </div>
              {/*<div>
                              <img src="icon email.png" className=" h-10 w-10 rounded-full border-2" alt=""/>
                         </div>*/}

              <CustomProfileDropdown />
            </a>
          </span>
        </header>
      </div>
    </div>
  );
}

export default TopBar;
