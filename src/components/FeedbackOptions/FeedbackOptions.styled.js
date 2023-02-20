import styled from 'styled-components';

export const Buttons = styled.button`
  cursor: pointer;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-family: Marvel;
  font-size: 10pt;
  width: 100px;
  height: 45px;
  position: relative;
  border: solid #bbb 1px;
  color: #bbb;
  z-index: 1;
  transition: all 0.5s ease-in-out;
  border-radius: 5px;
  margin: 5px;

  &:focus {
    outline: none;
  }

  background: #333;
  padding: 0;

  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    padding-top: 5px;
    transition: 0.5s ease-in-out;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    background: red;
    transition: all 0.5s ease-in-out;
  }

  &:before {
    height: 0%;
    width: 2px;
    top: 50%;
  }

  &:after {
    width: 0%;
    height: 2px;
    left: 50%;
  }

  &:hover:before {
    height: 100%;
    top: 0%;
    background: red;
  }

  &:hover:after {
    width: 100%;
    left: 0%;
    background: red;
  }

  &:hover {
    background: transparent;
    border-color: #333;
  }

  & span:hover {
    color: red;
  }

  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: #333;
    transition: all 0.5s ease-in-out;
  }

  & span:before {
    width: 2px;
    height: 0%;
    top: 50%;
  }

  & span:after {
    height: 2px;
    width: 0%;
    left: 50%;
  }

  & span:hover:before {
    height: 41px;
    top: 0%;
    background: red;
  }

  & span:hover:after {
    width: 100%;
    left: 0%;
    background: red;
  }

  &:active {
    background-color: #00a7fc;
    border-color: #00a7fc;
  }

  &:active:before,
  &:active:after {
    background-color: #00a7fc;
  }

  & span:active {
    color: #333;
  }

  & span:active:before,
  & span:active:after {
    background-color: #00a7fc;
  }
`;
