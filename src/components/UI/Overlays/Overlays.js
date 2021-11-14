import React from "react"
import ReactDOM from "react-dom"
import DarkenOverlay from "./DarkenOverlay"

const portal = document.getElementById("overlays")

const Overlays = (props) => {
   return (
      <React.Fragment>
         {ReactDOM.createPortal(<DarkenOverlay active={props.active} />, portal)}
      </React.Fragment>
   )
}

export default Overlays
