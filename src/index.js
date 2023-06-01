import React from "react";
import ReactDOM from "react-dom";

//we are using global attributes here like setting contentEditable = "true"
//allows us to edit the content
ReactDOM.render(
  <div>
    <h1 className="head" contentEditable="true" spellCheck="false">
      Hello World
    </h1>
  </div>,
  document.getElementById("root")
);
