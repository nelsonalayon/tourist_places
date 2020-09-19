import React from 'react';
import logo from './logo.svg';

import { Card } from './components/card/card'

import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <div className="App">   
          <GlobalStyle/>
          <Card/>        
    </div>
  );
}

export default App;
