import React from "react";
import { FcTodoList } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { MdFilterListAlt } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items- px-6 py-3 bg-gray-200 w-[100vw] shadow-md relative">
      <div className="nav-first-part flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center text-3xl  ">
          <FcTodoList size={100} />
        </div>
        <h1 className="text-3xl font-bold select-none">TO-DO.LY</h1>
        <div className="nav-search-bar flex items-center py-1 px-4 bg-gray-100 rounded-full w-[20vw] ">
          <div>
            <IoIosSearch size={30} />
          </div>
          <input
            placeholder="Search your tasks"
            className="rounded-full placeholder:text-2xl flex items-center focus:outline-none px-1 text-2xl "
          />
        </div>
      </div>
      <div className="nav-second-part flex items-center gap-6">
        <div className="flex items-center gap-5 text-3xl text-gray-500 ">
            <Link to="#" ><MdFilterListAlt/> </Link>
            <Link to="#" ><IoIosSettings/> </Link>
            <Link to="#" ><IoIosNotifications/> </Link>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
            <img src="https://i.pravatar.cc/300" alt="profile" className="object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
