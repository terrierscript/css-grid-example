import React, { SFC } from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  background: white;
  box-sizing: border-box;
  grid-template-columns: repeat(8, 100px);
`;

const Cell = styled.div`
  width: 100px;
  height: 100px;
`;

const Area = styled(Cell)`
  grid-row: ${({ row }: any) => row};
  grid-column: ${({ column }: any) => column};
`;

// @ts-ignore
const BoardCell: SFC<any> = styled(Area)`
  background: green;
  border: 1px solid black;
`;

// @ts-ignore
const Piece: SFC<any> = styled(Area)`
  border-radius: 100%;
  width: 90px;
  height: 90px;
  margin: 5px;
  vertical-align: middle;
  text-align: center;
  border: 1px solid transparent;
  background: ${({ color }: any) => color};
`;
// @ts-ignore
const Board: SFC<{}> = () => {
  return Array.from({ length: 8 }).map((_, i) => {
    return Array.from({ length: 8 }).map((_, j) => {
      const row = i + 1;
      const column = j + 1;
      return <BoardCell key={`${row}_${column}`} row={row} column={column} />;
    });
  });
};

export const Othero = () => {
  return (
    <Grid>
      <Board />
      <Piece color="black" row="4" column="4" />
      <Piece color="white" row="4" column="5" />
      <Piece color="white" row="5" column="4" />
      <Piece color="black" row="5" column="5" />
    </Grid>
  );
};
