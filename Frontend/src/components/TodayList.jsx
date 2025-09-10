import React from "react";
import TodoCard from "./TodoCard";

const TodayList = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold my-4">Today</h1>
      <div className="flex flex-col gap-4 w-full  ">
        {/* <TodoCard text={"This is prop form list component and it is working fine also there are more things to test"} /> */}
        <TodoCard text={"Hello"} />
        <TodoCard />
        <TodoCard text={"My name is tejas and im web developer"} />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};

export default TodayList;
