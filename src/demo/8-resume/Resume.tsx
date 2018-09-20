import React from "react";
import styled from "styled-components";
import photo from "./photo.png";
import { Area } from "components/grid/Grid";

const template = `
"	tl  tl    tl    ts      .     .	    .	    .	    ln1	  ln1	  ln1	"	2px
"	tl  tl    tl    ts      .     .	    .	    .	    ln2	  photo	ln3	"	1fr
"	.   .     .     .       .	    .	    .	    .	    ln2	  photo	ln3	"	1fr
"	ln7	ln7	  ln7	  ln7	    ln7	  .	    .	    .	    ln2	  photo	ln3	"	2px
"	ln8	.     kanaf	kanal	  ln6	  .	    .	    .	    ln2	  photo	ln3	"	2em
"	ln8	ln11	ln11	ln11	  ln6	  .	    .	    .	    ln2	  photo	ln3	"	1px
"	ln8	.     namef	namel	  ln6	  .	    .	    .	    ln2	  photo	ln3 "	0.1fr
"	ln8	.     namef	namel	  ln6	  .	    .	    .	    ln2	  photo	ln3	"	5em
"	ln8	ln12  ln12  ln12	  ln6	  .	    .	    .	    ln2	  photo	ln3	"	1px
"	ln8	.     birth	gender	ln6	  .	    .	    .	    ln4	  ln4	  ln4	"	2px
"	ln8	.     birth	gender	ln6	  .	    .	    .	    .	    .	    .	    "	2em
"	ln8	ln13  ln13  ln13 	  ln5	  ln5   ln5   ln5   ln5	  ln5   ln5	"	2px
"	ln8	.	    zip	  zip	    zip	  zip   ln15  email  phone phone ln10	"	2em
"	ln8	ln14	ln14	ln14	  ln14  ln14  ln15 	email 	phone phone ln10	"	1px
"	ln8	.     place	place	  place	place	ln15	email	phone	phone ln10	"	3em
"	ln9	ln9	  ln9	  ln9	    ln9	  ln9	  ln9	  ln9	  ln9	  ln9   ln9	"	2px
/	2px 10px  1fr   1fr	    2px	  0.1fr	2px   2px   2px	  0.7fr	2px		
`;
const Grid = styled.div`
  background: white;
  padding: 2em;
  box-sizing: border-box;
  display: grid;
  grid-template: ${template};
  width: 800px;
  align-items: center;
  justify-content: center;
`;

const Line = styled(Area)`
  background: black;
  width: 100%;
  height: 100%;
`;

const Lines = () => {
  return (
    <>
      {Array.from({ length: 15 }).map((_, i) => {
        const num = i + 1;
        const area = `ln${num}`;
        return <Line area={area} key={area} />;
      })}
    </>
  );
};

const PhotoImg = styled.img`
  width: 100%;
`;
const Photo = () => {
  return <PhotoImg src={photo} />;
};

const Name = styled.div`
  font-size: 2em;
  width: 100%;
  /* text-align: center; */
`;
const Kana = styled.div`
  width: 100%;
  /* text-align: center; */
`;
const Title = styled.div`
  font-size: 2em;
  letter-spacing: 1.5em;
  text-align: center;
  font-weight: bold;
`;

const BoxArea = styled(Area)`
  padding: 0.2em;
`;
export const Resume = () => {
  return (
    <Grid>
      <Lines />
      <Area area={"tl"}>
        <Title>履歴書</Title>
      </Area>
      <Area area={"ts"}>2018/09/20</Area>
      <BoxArea area={"kanaf"}>
        <Kana>しいえす</Kana>
      </BoxArea>
      <BoxArea area={"kanal"}>
        <Kana>えすたろう</Kana>
      </BoxArea>
      <BoxArea area={"namef"}>
        <Name>椎江州</Name>
      </BoxArea>
      <BoxArea area={"namel"}>
        <Name>得太郎</Name>
      </BoxArea>
      <BoxArea area={"gender"}>男</BoxArea>
      <BoxArea area={"birth"}>昭和 60 年 1 月 1 日</BoxArea>
      <BoxArea area={"zip"}>〒 153-0063</BoxArea>
      <BoxArea area={"place"}>
        東京都目黒区目黒３丁目９−１ 目黒 須田 ビル 5F
      </BoxArea>
      <BoxArea area={"phone"}>090-1234-5678</BoxArea>

      <Area area={"photo"}>
        <Photo />
      </Area>
    </Grid>
  );
};
