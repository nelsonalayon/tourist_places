import React from "react";


import { Template } from "./components/template/template";

import  Card  from "./components/card/card";
import { CardList } from "./components/cardList/Cardlist";


import { GlobalStyle } from "./GlobalStyles";

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Template>
        <Switch>
          <div>
             <Route exact path="/" component={Card} />
          <Route exact path="/saved" component={CardList} />
          </div>
         
        </Switch>
      </Template>
    </BrowserRouter>
  );
}

export default App;
