import React from "react";

function Content(props){
    return(
      <div className="inline-block">
          <p className="font-bold text-2xl">{props.name}</p>
          <span> In publishing and graphic design, 
           Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
            or a typeface without relying on meaningful content.
             Lorem ipsum may be used as a placeholder before the final copy is available.
            It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
            or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
                 It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.
  
    </span>
       </div>
    )
}
export default Content;