import React, { useState } from "react";

const TodoCard = ({text}) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="w-full bg-gray-100 py-4 px-5 rounded-md shadow-md flex items-center gap-3">
      <input type="checkbox" onChange={() => setCheck(!check)} />
      <div className="flex flex-col gap-1 items-start">
        <p className={`text-lg font-semibold ${check ? 'line-through text-gray-600': ""}`} >{text || "Go to gym, do legs today!"}</p>
        <div className="flex items-center gap-5  ">
            <span className="text-xs px-2 font-semibold">12 Jun</span>
            <span className="px-2 text-white bg-red-500 rounded-md text-xs ">important</span>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
