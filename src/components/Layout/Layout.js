import React, { useState, useEffect } from "react"
import Overlays from "../UI/Overlays/Overlays"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import styles from "./Layout.module.scss"

const Layout = ({ children }) => {
   const [enableOverlays, setEnableOverlays] = useState(false)
   const [enableJumpToTop, setEnableJumpToTop] = useState(false)

   useEffect(() => {
      const handleScrollToTop = () => setEnableJumpToTop(window.scrollY >= 450)

      window.addEventListener("scroll", handleScrollToTop)

      return () => window.removeEventListener("scroll", handleScrollToTop)
   }, [])

   const handleToggleOverlays = (state) => {
      if (state !== undefined) {
         setEnableOverlays(!!state)
      } else {
         setEnableOverlays((prevState) => !prevState)
      }
   }

   return (
      <>
         <Overlays backdrop={enableOverlays} jumpTop={enableJumpToTop} />
         <Header onToggleOverlays={handleToggleOverlays} />
         <main className={styles.container}>{children}</main>
         <Footer />
      </>
   )
}

export default Layout
