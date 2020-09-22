import React from "react";
import Logo from "../logo/logo";

import { Link } from 'react-router-dom'
 

import { Items, LinkText } from "./styles";

export const Template = (props) => {
  return (
    <React.Fragment>
      <Items>
        <li>
          <Link to = "/"> <Logo /> </Link>
        </li>
        <li>
          <Link to ="/saved"><LinkText>Tourist places saved</LinkText></Link>
        </li>
      </Items>
      {props.children}  
     
      
    </React.Fragment>
  );
};
