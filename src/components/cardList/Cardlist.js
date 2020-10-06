import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import * as saveActions from "../../actions/saveActions";
import Modal from "../../modal/modal";

import { CardContainer, Image } from "./styles";

const CardList = (props) => {
  const [open, setOpen] = useState(false);
  const [imageSelected, setImageSelected] = useState(0);
  console.log(props);

  const handleClose = () => {
    setOpen(false);
  };

  const showImage = (position) => {
    setOpen(true)
    setImageSelected(position)
  }

  useEffect(() => {});

  return (
    <CardContainer>
      {props.placesSaved.map((choosed) => {
        return (
          <div key={choosed}>
            <div onClick={() => showImage(choosed)}>
              <figure>
                <img
                  src={props.places[0][choosed].image}
                  width="350px"
                  alt={choosed}
                />
              </figure>
            </div>
          </div>
        );
      })}
      <Modal isOpen={open} onClose={() => handleClose()}>
        <Image src={props.places[0][imageSelected].image}></Image>
      </Modal>
    </CardContainer>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.placeReducer;
};

export default connect(mapStateToProps, saveActions)(CardList);
