import React from "react";
import TodayList from "./TodayList";
import UpcomingList from "./UpcomingList";

const Body = () => {
  return (
    <div className="w-[80%] h-screen overflow-x-hidden bg-gray-50">
      <div className="flex w-full h-full pt-10">
        <div className="w-1/2 px-10 ">
          <TodayList />
        </div>
        <div className="w-1/2 px-10 ">
          <UpcomingList />
        </div>
      </div>
    </div>
  );
};

export default Body;
