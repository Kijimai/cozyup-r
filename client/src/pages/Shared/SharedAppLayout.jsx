import React from "react"
import { Outlet } from "react-router-dom"
import Navigator from "./Navigator"
import Footer from "./Footer"

const SharedAppLayout = () => {
  return (
    <>
      <Navigator />
      <Outlet />
      <Footer />
    </>
  )
}

export default SharedAppLayout
