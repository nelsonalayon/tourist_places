import styled from "styled-components";



export const BtnShine = styled.button`  
    position: relative;
    margin: 0;
    padding: 5px 12px;
    height: 60px;
    width: 150px;
    outline: none;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    background-color: #ffffff;
    border: 1px solid rgba(22, 76, 167, 0.6);
    border-radius: 10px;
    color: #1d89ff;
    font-weight: 400;
    font-size: 20px;
    font-family: inherit;
    z-index: 0;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
    span {
      color: #164ca7;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.7px;
    }
    &:hover {
      animation: rotate 0.7s ease-in-out both;
      span {
        animation: storm 0.7s ease-in-out both;
        animation-delay: 0.06s;
      }    
  

  @keyframes rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
  @keyframes storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }
  
    border: 1px solid;
    overflow: hidden;
    position: relative;
    span {
      z-index: 20;
    }
    &:after {
      background: #38ef7d;
      content: "";
      height: 155px;
      left: -75px;
      opacity: 0.4;
      position: absolute;
      top: -50px;
      transform: rotate(35deg);
      transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      width: 50px;
      z-index: -10;
    }
    &:hover {
      &:after {
        left: 120%;
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
      }

  
`;