import React from "react";

const Number = ({ data }) => {
  let color;
  if (data > 0) color = "green";
  else if (data < 0) color = "red";
  else color = "black";
  return (
    <h2 id="number" style={{ color: color }}>
      {data}
    </h2>
  );
};

export default Number;
