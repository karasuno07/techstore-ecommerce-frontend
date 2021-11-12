import React from "react"
import "./App.css"
import Header from "./component/Layout/Header/Header"
import Footer from "./component/Layout/Footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route
               path="/"
               element={
                  <React.Fragment>
                     <Header />
                     <Footer />
                  </React.Fragment>
               }></Route>
         </Routes>
      </BrowserRouter>
   )
}

export default App
