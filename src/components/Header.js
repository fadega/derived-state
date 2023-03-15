import React, { useState } from "react";
export default function Header(props) {


  return (
    <header>
      <h1>Welcome back,{props.user}</h1>
    
    </header>
  );
}