import * as React from "react";
import styled from "styled-components";
// @ts-ignore
import bg from "./bg.jpg";

export const FlexCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Gradient = styled.div`
  background: linear-gradient(
    90deg,
    rgba(137, 72, 224, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 50%;
  /* color: white; */
  padding: 0.5em;
`;

export const White = styled.div`
  background: white;
  color: black;
  padding: 0.5em;
  border-radius: 4px;
  width: 100%;
  min-height: 100vh;
  box-shadow: 0px 0px 2px 2px rgba(100, 100, 100, 0.7);
`;

export const SampleImageBackground = styled.div`
  background-image: url(${bg});
  background-size: cover;
  height: 100%;
`;

export const ImageBackground = styled.div<{ img: string }>`
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  height: 100%;
  background-position: center;
`;

export const FullSize = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
