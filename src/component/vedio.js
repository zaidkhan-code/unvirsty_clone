import React, { useRef, useState } from "react";
import "./vedio.css";
import vedio from "../assets/live.mp4";
function Vedio({ play,setPlay }) {
  const player = useRef(null);
  function closeplayer(){
  setPlay(false)
  }
  return (
    <div
      className={`${play ? "vedio-player " : "hide"}`}
      ref={player}
      onClick={closeplayer}
    >
      <video src={vedio} autoPlay muted controls></video>
    </div>
  );
}

export default Vedio;
