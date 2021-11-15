import React, { useState } from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Overlays from "../UI/Overlays/Overlays"

const Layout = ({ children }) => {
   const [enableOverlays, setEnableOverlays] = useState(false)

   const handleToggleOverlays = (state) => {
      if (state !== undefined) {
         setEnableOverlays(!!state)
      } else {
         setEnableOverlays((prevState) => !prevState)
      }
   }

   return (
      <>
         <Header onToggleOverlays={handleToggleOverlays} />
         <main>{children}</main>
         <Footer />
         <Overlays active={enableOverlays} />
      </>
   )
}

export default Layout
