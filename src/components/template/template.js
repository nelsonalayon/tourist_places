import React from "react";
import Logo from "../logo/logo";


import { Items } from "./styles";

export const Template = (props) => {
  return (
    <React.Fragment>
      <Items>
        <li>
          <Logo />
        </li>
        <li>
          <h3>Tourist places saved</h3>
        </li>
      </Items>
      {props.children}  
     
      
    </React.Fragment>
  );
};
