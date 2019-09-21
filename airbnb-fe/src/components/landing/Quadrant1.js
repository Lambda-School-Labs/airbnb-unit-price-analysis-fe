import React from "react";
import styled from 'styled-components';

const Q1div = styled.div`
    // height: 45vw;        //<- Dynamic height
    // min-height: 600px;   //<- Dynamic height
    height: 77vh;           //<- Static height
    width: 100%;
    background-color: grey;
`

const QuadrantLimiter = styled.div`
    height: 100%;
    width: 80%;
`

function Quadrant1() {
  return (
    <Q1div>
      <QuadrantLimiter>

      </QuadrantLimiter>
    </Q1div>
  );
}

export default Quadrant1;