import * as React from "react"
import { FC } from "react"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
const Layout: FC = ({ children }) => {
  return (
    <div className={"flex flex-col mt-20"}> 
      <Navbar />
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout
