import React from "react";
import { connect } from "react-redux";
import * as saveActions from "../../actions/saveActions";

import { CardContainer } from "./styles";

const CardList = (props) => {
  console.log(props);
  return (
    <CardContainer>
      {props.placesSaved.map((choosed) => {
        return (
          <div>
            <figure>
              <img src={props.places[0][choosed].image} width="350px" />
            </figure>
          </div>
        );
      })}
    </CardContainer>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.placeReducer;
};

export default connect(mapStateToProps, saveActions)(CardList);
