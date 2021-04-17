import * as React from "react"
import { FC } from "react"
import Navbar from "../components/Navbar"

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
