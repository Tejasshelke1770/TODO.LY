import React from "react";
import { Link } from "react-router-dom";
import { LuListTodo } from "react-icons/lu";
import { IoTodayOutline } from "react-icons/io5";
import { MdOutlineUpcoming } from "react-icons/md";
import { MdLabelImportantOutline } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";
import { IoArchiveOutline } from "react-icons/io5";

const SideNav = () => {
  return (
    <div className="w-[20%] h-screen bg-gray-50 overflow-x-hidden ">
      <nav className="flex flex-col gap-2 py-3 px-2 mb-0">
        <Link
          to="/inbox"
          className="px-4 py-3 flex items-center gap-4 bg-gray-100 click:bg-gray-200 hover:bg-gray-200 duration-200 rounded-md "
        >
          <LuListTodo size={30} />
          <h3 className="font-semibold text-xl">Inbox</h3>
        </Link>
        <Link
          to="/today"
          className="px-4 py-3 flex items-center gap-4 bg-gray-100 click:bg-gray-200 hover:bg-gray-200 duration-200 rounded-md "
        >
          <IoTodayOutline size={30} />
          <h3 className="font-semibold text-xl">Today</h3>
        </Link>
        <Link
          to="/upcoming"
          className="px-4 py-3 flex items-center gap-4 bg-gray-100 click:bg-gray-200 hover:bg-gray-200 duration-200  rounded-md "
        >
          <MdOutlineUpcoming size={30} />
          <h3 className="font-semibold text-xl">Upcoming</h3>
        </Link>
        <Link
          to="/priority"
          className="px-4 py-3 flex items-center gap-4 bg-gray-100 click:bg-gray-200 hover:bg-gray-200 duration-200 rounded-md "
        >
          <MdLabelImportantOutline size={30} />
          <h3 className="font-semibold text-xl">Priority</h3>
        </Link>
        <Link
          to="/completed"
          className="px-4 py-3 flex items-center gap-4 bg-gray-100 click:bg-gray-200 hover:bg-gray-200 duration-200 rounded-md "
        >
          <GrCompliance size={30} />
          <h3 className="font-semibold text-xl">Completed</h3>
        </Link>
        <Link
          to="/archived"
          className="px-4 py-3 flex items-center gap-4 bg-gray-100 click:bg-gray-200 hover:bg-gray-200 duration-200 rounded-md "
        >
          <IoArchiveOutline size={30} />
          <h3 className="font-semibold text-xl">Archived</h3>
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
