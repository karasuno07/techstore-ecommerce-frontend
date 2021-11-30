import React from "react"
import ReactDOM from "react-dom"
import { useSelector } from "react-redux"
import DarkenOverlay from "./DarkenOverlay"
import JumpTopButton from "./JumpTopButton"
import Spinner from "./Spinner"

const portal = document.getElementById("overlays")

const Overlays = ({ backdrop, jumpTop }) => {
   const loading = useSelector((state) => state.ui.loading)

   return (
      <React.Fragment>
         {ReactDOM.createPortal(<DarkenOverlay active={backdrop} />, portal)}
         {jumpTop && ReactDOM.createPortal(<JumpTopButton />, portal)}
         {loading && ReactDOM.createPortal(<Spinner />, portal)}
      </React.Fragment>
   )
}

export default React.memo(Overlays)
