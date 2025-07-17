import React, { useState } from "react";

function About() {
  const [state, setState] = useState("black");
  const colors = ["Red", "Green", 'Purple', "Blue", "Grey"]

  return (
    <div>
      {colors.filter((element, i, arr) => true).map((value, index, array) => (
        <div key={index}>
          <span onClick={() => value === 'Blue' ? null : setState(value)}>
            {value}
          </span>
        </div>
      ))}
      <div
        style={{
          height: "100px",
          width: "100px",
          border: "1px solid",
          backgroundColor: state,
        }}
      ></div>
    </div>
  );
}

export default About;
