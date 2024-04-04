import React from 'react'
import { List } from "@phosphor-icons/react/dist/ssr";
import dataNavbar from './dataNavbar';

function NavbarRespon() {
  return (
    <div className="w-screen">
      <div className="z-10 fixed md:hidden flex bottom-8 left-24 sm:left-56 bg-[#d1e1ffdb] border border-[#d1e1ff70] rounded-3xl ">
        <div className="dropdown dropdown-top ">
          <div
            tabIndex={0}
            role="button"
            className="btn border border-[#d1e1ff70] rounded-3xl m-1 bg-[#d1e1ff29]"
          >
            Menu
            <List />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-box w-52"
          >
            {dataNavbar.map((item, index) => (
              <li key={index}>
                <a href="">{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="m-1 text-sm p-3 border border-[#d1e1ff70] rounded-3xl bg-gradient-to-r from-cyan-500  to-blue-500">
          <a href="">Let's talk</a>
        </div>
      </div>
    </div>
  );
}

export default NavbarRespon