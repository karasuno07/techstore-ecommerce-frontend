import React from "react"
import ReactDOM from "react-dom"
import DarkenOverlay from "./DarkenOverlay"
import JumpTopButton from "./JumpTopButton"

const portal = document.getElementById("overlays")

const Overlays = ({ backdrop, jumpTop }) => {
   return (
      <React.Fragment>
         {ReactDOM.createPortal(<DarkenOverlay active={backdrop} />, portal)}
         {jumpTop && ReactDOM.createPortal(<JumpTopButton />, portal)}
      </React.Fragment>
   )
}

export default Overlays
