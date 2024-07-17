import React from "react";
import Content from "../../../components/Content";
function OtherRoutes(props){
    return(
             <div className="inline-block rounded-md border-4 border-slate-400 p-5 w-12/12 min-h-96 ">
               <Content name={props.name} />
             </div>
    )
}
export default OtherRoutes;