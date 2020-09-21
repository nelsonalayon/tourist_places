import React from "react";

import { Container, BtnShine } from "./styles"

export const Button = (props) => {
  return (
    <div>      
      <BtnShine>
        <span>{props.name}</span>
      </BtnShine>        
    </div>
  );
};
