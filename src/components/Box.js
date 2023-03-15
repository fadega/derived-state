import React, { useState } from "react";
import boxs from "../boxs";

export default function Box(props) {
  const [on, setOn] = useState(props.on)
  const styles =   {
    backgroundColor: on? "#480442" : "transparent",
  }
 
  // const [color, setColor] = useState("transparent")
  function toggle() {
    setOn(prevOn => !prevOn)

  }
  return (
    <div className="box" style={styles} onClick={toggle}> </div>
  );
}
