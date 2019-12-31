import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../store";
import getActions from "../actions/container";

const Background = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: gray;
`;

function Container() {
  const { updateValue, getValue } = getActions(useContext(Context));
  const value = getValue();
  console.log(value);
  useEffect(() => {
    updateValue(1);
  }, []);
  return <Background></Background>;
}

export default Container;
