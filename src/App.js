import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"

const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Register = React.lazy(() => import("./pages/Register"))
const Products = React.lazy(() => import("./pages/Products"))

function App() {
   return (
      <Layout>
         <Suspense fallback={<div className="centered"></div>}>
            <Routes>
               <Route path="/" exact element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/:category" element={<Products />} />
            </Routes>
         </Suspense>
      </Layout>
   )
}

export default App
