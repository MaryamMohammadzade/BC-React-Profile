import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

function FirstRoute(props) {
  return (
    <div className="flex justify-between gap-2">
      <div className="w-2/12 m-1">
        <SideBar />
      </div>
      <div className="rounded-md border-4 border-slate-400 p-5 w-10/12 min-h-96 m-1">
        <Outlet />
      </div>
    </div>
  );
}

export default FirstRoute;