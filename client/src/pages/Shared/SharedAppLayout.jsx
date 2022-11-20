import React from "react"
import { Outlet } from "react-router-dom"
import Navigator from "./Navigator"
import Header from "../../components/Header"
import Footer from "./Footer"

const SharedAppLayout = () => {
  return (
    <>
      <Navigator />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedAppLayout
