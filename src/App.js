import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"

const Homepage = React.lazy(() => import("./pages/Homepage"))
const Login = React.lazy(() => import("./pages/Login"))

function App() {
   return (
      <Layout>
         <Suspense fallback={<div className="centered"></div>}>
            <Routes>
               <Route path="/" exact element={<Homepage />} />
               <Route path="/login" element={<Login />} />
            </Routes>
         </Suspense>
      </Layout>
   )
}

export default App
