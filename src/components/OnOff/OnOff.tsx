import React, { useState } from "react";

type OnOffPropsType = {
  on: boolean
  onClick: (on: boolean) => void
}

export const OnOff = (props: OnOffPropsType) => {
  const onStyle = {
    minWidth: "25px",
    height: "20px",
    display: "inline-block",
    padding: "5px 10px",
    marginBottom: "10px",
    border: "1px solid #000",
    background: props.on ? "green" : "none"
  }

  const offStyle = {
    minWidth: "25px",
    height: "20px",
    display: "inline-block",
    padding: "5px 10px",
    marginBottom: "10px",
    border: "1px solid #000",
    marginLeft: "10px",
    background: props.on ? "none" : "red"
  }

  const indicatorStyle = {
    width: "10px",
    height: "10px",
    display: "inline-block",
    marginLeft: "15px",
    border: "1px solid #000",
    borderRadius: "50%",
    background: props.on ? "green" : "red"
  }

  return (
    <div>
      <div onClick={() => { props.onClick(true) }} style={onStyle}>On</div>
      <div onClick={() => { props.onClick(false) }} style={offStyle}>Off</div>
      <div style={indicatorStyle}></div>
    </div >
  )
}