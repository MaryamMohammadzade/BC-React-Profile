import React from "react";
import SideBarElement from "./SideBarElement";
function SideBar(){
    return(
        <div className="inline-block min-h-96 rounded-md border-4 border-slate-400 p-5 ">
           <SideBarElement name="User-1" />
           <SideBarElement name="User-2" />
           <SideBarElement name="User-3" />
           <SideBarElement name="User-4" />
        </div>
    )
}
export default SideBar;