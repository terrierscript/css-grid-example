import styled from "styled-components";
import React, { SFC } from "react";

const template = `
  "qq qq ww ww ee ee rr rr tt tt yy yy uu uu ii ii oo oo pp pp"
  ".. aa aa ss ss dd dd ff ff gg gg hh hh jj jj kk kk ll ll .."
  ".. .. zz zz xx xx cc cc vv vv bb bb nn nn mm mm .. .. .. .."
`;

const Grid = styled.div`
  display: grid;
  grid-template-areas: ${template};
  grid-gap: 1em;
  grid-auto-columns: 25px;
  background: #eee;
  border-radius: 10px;
  padding: 2em;
`;

export const Area = styled.div<{ area: string }>`
  grid-area: ${(p) => p.area};
`;

const Key = styled.div`
  background: #bbb;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  vertical-align: middle;
  border-radius: 5px;
`;

// @ts-ignore
const KeyMaps: SFC<{ down: any }> = () => {
  const keys = "abcdefghijklmnopqrstuvwxyz".split("");
  return keys.map((k) => {
    const area = `${k}${k}`;
    return (
      <Area area={area} key={area}>
        <Key>{k.toUpperCase()}</Key>
      </Area>
    );
  });
};

export const Keyboard = () => {
  return (
    <div>
      {(down) => (
        <Grid>
          <KeyMaps down={down} />
        </Grid>
      )}
    </div>
  );
};
