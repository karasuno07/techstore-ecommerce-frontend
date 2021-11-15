import React, { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"
import Overlays from "./components/UI/Overlays/Overlays"
import Button from "./components/UI/Button"

function App() {
   const [enableOverlays, setEnableOverlays] = useState(false)

   const handleToggleOverlays = (state) => {
      if (state !== undefined) {
         setEnableOverlays(!!state)
      } else {
         setEnableOverlays((prevState) => !prevState)
      }
   }

   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <React.Fragment>
                     <Header onToggleOverlays={handleToggleOverlays} />
                     <div className="mt-10">
                        <Button href="123" variant="info">
                           123
                        </Button>
                     </div>
                     <Footer />
                     <Overlays active={enableOverlays} />
                  </React.Fragment>
               }></Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App
