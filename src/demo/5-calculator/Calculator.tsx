import styled from "styled-components";
import React from "react";
import { OrangeButton, GrayButton } from "./Button";
import { FlexCenter } from "components/background/Background";
import { Area } from "components/grid/Grid";

const template = `
  ".  .  so so"
  "ii ii ii ii"
  "ac pm pc di"
  "k7 k8 k9 pw"
  "k4 k5 k6 mi"
  "k1 k2 k3 pl"
  "k0 k0 do eq" / 60px 60px 60px 60px
`;

const Grid = styled.div`
  display: grid;
  grid-template: ${template};
  grid-gap: 1em;
`;

const BlackBackground = styled.div`
  background: linear-gradient(
    0deg,
    rgba(29, 29, 29, 1) 0%,
    rgba(70, 70, 70, 1) 100%
  );
  padding: 1em;
  border-radius: 20px;
  width: fit-content;
  height: max-content;
`;

const Input = styled.input`
  font-size: 1.8em;
  border-radius: 0.8em;
  outline: none;
  color: white;
  border: 0px;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.5em 1em;
  width: 100%;
  box-sizing: border-box;
`;

const NumberButton = GrayButton;

const Numbers = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <Area area={`k${i}`} key={i}>
            <NumberButton>{i}</NumberButton>
          </Area>
        );
      })}
    </>
  );
};

const Operator = () => (
  <>
    <Area area="di">
      <OrangeButton>÷</OrangeButton>
    </Area>
    <Area area="pw">
      <OrangeButton>×</OrangeButton>
    </Area>
    <Area area="mi">
      <OrangeButton>-</OrangeButton>
    </Area>
    <Area area="pl">
      <OrangeButton>+</OrangeButton>
    </Area>
    <Area area="do">
      <NumberButton>.</NumberButton>
    </Area>
    <Area area="eq">
      <OrangeButton>=</OrangeButton>
    </Area>
    <Area area="ac">
      <OrangeButton>AC</OrangeButton>
    </Area>
    <Area area="pm">
      <OrangeButton>+/-</OrangeButton>
    </Area>
    <Area area="pc">
      <OrangeButton>%</OrangeButton>
    </Area>
  </>
);

const Container = styled(FlexCenter)`
  height: 100vh;
  display: flex;
  font-family: "Quicksand", sans-serif;

  background: linear-gradient(
    90deg,
    rgba(100, 130, 200, 1) 0%,
    rgba(162, 165, 194, 1) 100%
  );
`;
export const Calcurator = () => {
  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css?family=Quicksand"
        rel="stylesheet"
      />
      <BlackBackground>
        <Grid>
          <Area area="ii">
            <Input />
          </Area>
          {/* <SolarPanel /> */}
          <Numbers />
          <Operator />
        </Grid>
      </BlackBackground>
    </Container>
  );
};
