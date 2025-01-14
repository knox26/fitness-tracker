import React from "react";
import NavBar from "./projectcomponents/NavBar/NavBar";

import "./App.css";
import DashBoard from "./pages/DashBoard";
import SideBar from "./projectcomponents/SideBar";


export default function App() {
  return (
    <>
      <div className="h-screen w-full  dark:bg-neutral-900">
      <NavBar/>
      <SideBar/>
         <div >
          <DashBoard/>
         </div>
      </div>
    </>
  )
}
