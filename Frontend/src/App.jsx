import React from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Body from "./components/Body";

const App = () => {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Navbar />
      <div className="w-full flex ">
        <SideNav />
        <Body />
      </div>
    </div>
  );
};

export default App;
