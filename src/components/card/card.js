
import React, { useState, useEffect } from 'react';
import Places from "../../places.json";
import { PhotoContainer, Buttons } from "./styles";
import { connect } from "react-redux";
import { Button } from "../button/button";
import * as saveActions from "../../actions/saveActions";




const Card = (props) => {

  
  const [count, setCount] = useState(0);

  const arrayLength = props.places[0].length

  const handleSaveClick = (e) => {
    props.SavePlace()
  };

  const handleNextClick = (e) => {
    if(count < arrayLength-1) {
      setCount(count + 1)
    }
    else{
      setCount(0)
    }
    
  }

  console.log(arrayLength)

  console.log(Places.placesPhotos[3]);
  console.log(props);

  
  return (
    <div>
      <PhotoContainer>
        <h3>{props.places[0][count].name}</h3>
        <img src={props.places[0][count].image} alt="foto" width="100%" />
      </PhotoContainer>
      <Buttons>
        <Button name="save" />
        <Button name="next" />

        <button onClick={handleSaveClick}>save</button>
        <button onClick = {handleNextClick} >next</button>
        
      </Buttons>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.placeReducer;
};

export default connect(mapStateToProps, saveActions)(Card);
