import { Twitter } from "../1-twitter";
import { Calendar } from "../2-calendar/Calendar";
import React from "react";
import { Timetable } from "../3-timetable/Timetable";
import { Othero } from "../4-othero/Othero";
import { Calcurator } from "../5-calculator/Calculator";
import { LearnCampus } from "../6-lean-canvas/LeanCanvas";
import { Keyboard } from "../7-keyboard/Keyboard";
import { Resume } from "../8-resume/Resume";

const Demo = ({ children }) => children;
const generateFixture = (name, children) => {
  return {
    name,
    component: Demo,
    props: {
      children
    }
  };
};

export default [
  generateFixture("1-twitte", <Twitter />),
  generateFixture("2-calendar", <Calendar year={2021} month={1} />),
  generateFixture("3-timetable", <Timetable />),
  generateFixture("4-othero", <Othero />),
  generateFixture("5-calculator", <Calcurator />),
  generateFixture("6-leancampus", <LearnCampus />),
  generateFixture("7-keyboard", <Keyboard />),
  generateFixture("8-resume", <Resume />)
];
