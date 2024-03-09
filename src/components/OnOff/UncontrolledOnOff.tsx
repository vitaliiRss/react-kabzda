import React, { useState } from "react";

type UncontrolledOnOffPropsType = {
  onChange: (on: boolean) => void
  defaultValue?: boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
  let [on, setOn] = useState(props.defaultValue ? props.defaultValue : false)

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

  const onClicked = () => {
    setOn(true)
    props.onChange(true)
  }

  const offClicked = () => {
    setOn(false)
    props.onChange(false)
  }

  return (
    <div>
      <div style={onStyle} onClick={onClicked}>On</div>
      <div style={offStyle} onClick={offClicked}>Off</div>
      <div style={indicatorStyle}></div>
    </div >
  )
}