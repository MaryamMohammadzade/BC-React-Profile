import React from "react";

function Media(props){
    return(
       <img src={props.url} alt="social media icon" className="inline-block mr-2 w-16 h-16 rounded-full cursor-pointer"/>
    )
}
export default Media;