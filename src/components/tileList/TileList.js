import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({data}) => {
  return (
    <div>
      {data.map(({ name, ...rest }, index) => (
        <Tile name={name} description={rest} key={index} />
      ))}
    </div>
  );
};
