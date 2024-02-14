import React, { useState } from "react";

export const OnOff = () => {
  let [on, setOn] = useState(false)

  const onHandler = () => {
    setOn(true);
  };

  const offHandler = () => {
    setOn(false);
  };

  const onStyle = {
    minWidth: "25px",
    height: "20px",
    display: "inline-block",
    padding: "5px 10px",
    marginBottom: "10px",
    border: "1px solid #000",
    background: on ? "green" : "none"
  }

  const offStyle = {
    minWidth: "25px",
    height: "20px",
    display: "inline-block",
    padding: "5px 10px",
    marginBottom: "10px",
    border: "1px solid #000",
    marginLeft: "10px",
    background: on ? "none" : "red"
  }

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    display: "inline-block",
    marginLeft: "15px",
    border: "1px solid #000",
    borderRadius: "50%",
    background: on ? "green" : "red"
  }

  return (
    <div>
      <div onClick={onHandler} style={onStyle}>On</div>
      <div onClick={offHandler} style={offStyle}>Off</div>
      <div style={indicatorStyle}></div>
    </div >
  )
}