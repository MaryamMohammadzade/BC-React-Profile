import React from "react";
import { NavLink, Outlet} from "react-router-dom";

function Profile(){
    return(
      <>
      <header className="rounded-md border-4 border-slate-400 p-5 m-6 flex gap-2  items-center">
        <NavLink to="/" className={({isActive})=>{return isActive? "bg-slate-800 inline-block rounded-md w-8 h-8 m-2 p-2" : " bg-slate-600 inline-block rounded-md w-8 h-8 m-2 p-2"}}><img alt="home" src="https://img.icons8.com/?size=100&id=73&format=png&color=ffffff"/></NavLink>
        <NavLink to="/route-1" className={({isActive})=>{return isActive? "bg-slate-800 inline-block rounded-md w-24 h-3 m-2" : " bg-slate-600 inline-block rounded-md w-24 h-3 m-2"}} ></NavLink>
        <NavLink to="/route-2" className={({isActive})=>{return isActive? "bg-slate-800 inline-block rounded-md w-24 h-3 m-2" : " bg-slate-600 inline-block rounded-md w-24 h-3 m-2"}} ></NavLink>
        <NavLink to="/route-3" className={({isActive})=>{return isActive? "bg-slate-800 inline-block rounded-md w-24 h-3 m-2" : " bg-slate-600 inline-block rounded-md w-24 h-3 m-2"}} ></NavLink>
        <NavLink to="/route-4" className={({isActive})=>{return isActive? "bg-slate-800 inline-block rounded-md w-24 h-3 m-2" : " bg-slate-600 inline-block rounded-md w-24 h-3 m-2"}}></NavLink>
        <NavLink to="/route-5" className={({isActive})=>{return isActive? "bg-slate-800 inline-block rounded-md w-24 h-3 m-2" : " bg-slate-600 inline-block rounded-md w-24 h-3 m-2"}}></NavLink>
      
      </header>
        <div className="mx-6 ">
           <Outlet />
        </div>
      <footer className="rounded-md border-4 border-slate-400 p-5 m-6 justify-center">
         footer
      </footer>

      </>
    )
}
export default Profile;
