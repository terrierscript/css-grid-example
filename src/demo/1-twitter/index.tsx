import React from "react";
import styled from "styled-components";
import icon from "./icon.jpg";
import { Area } from "components/grid/Grid";

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faRetweet, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faComment } from "@fortawesome/free-regular-svg-icons";

const template = `
  "avater name  name  .     .  menu"
  ".      body  body  body  body  body"
  ".      com   like  rt    .     ."
`;

const Grid = styled.div`
  display: grid;
  grid-template: ${template};
  background: white;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 0.5em;
  grid-gap: 0.2em;
`;

const Avater = styled.img`
  border-radius: 50%;
  width: 50px;
`;
const Name = styled.div`
  font-weight: bold;
  vertical-align: middle;
`;
const UserName = styled.div`
  color: #657786;
  font-size: 0.8em;
`;

const Body = styled.div`
  font-size: 0.9em;
`;

export const Twitter = () => {
  return (
    <Grid>
      <Area area={"avater"}>
        <Avater src={icon} />
      </Area>
      <Area area={"name"}>
        <Name>terrierscript</Name>
        <UserName>@terrierscript</UserName>
      </Area>
      <Area area={"menu"}>
        <Fa icon={faAngleDown} color="#aaa" />
      </Area>
      <Area area={"body"}>
        <Body>
          あのイーハトーヴォの すきとおった風、 夏でも底に冷たさをもつ青いそら、
          うつくしい森で飾られたモーリオ市、 郊外のぎらぎらひかる草の波。
        </Body>
      </Area>
      <Area area={"com"}>
        <Fa icon={faComment} color="#aaa" />
      </Area>
      <Area area={"like"}>
        <Fa icon={faHeart} color="#aaa" />
      </Area>
      <Area area={"rt"}>
        <Fa icon={faRetweet} color="#aaa" />
      </Area>
    </Grid>
  );
};
