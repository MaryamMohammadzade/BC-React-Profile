import React from "react";
import Media from "../../../components/Media";
import { Link } from "react-router-dom";
function SideBarElement(props){
    return(
           <div className=" inline-flex h-20">
               <Media url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS3uMVc54NYJHXFUSIUFZrI3Zp00EZ6KcA&s" />
               <div className="inline-block mt-2 w-auto" >
                  <Link className="block font-bold" to={'/route-2/'+props.name} >{props.name}</Link>
                  <span>this can be text</span>
               </div>
           </div>
      
    )
}
export default SideBarElement;