import * as React from "react"
import { FC } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Navbar: FC = () => {
  return (
    <nav className={"p-5 max-w-7xl mx-auto flex items-center"}>
      <Link to={"/"}>
        <StaticImage
          src={"../images/BGP-Logo.webp"}
          alt={"logo"}
          width={216}
          formats={["auto", "webp", "avif"]}
        />
      </Link>
      <Navlinks to={"/"} text={"Home"} className={"ml-auto"} />
      <Navlinks to={"/products"} text={"Our Products"} />
      <Navlinks to={"/about"} text={"About Us"} />
      <Navlinks to={"/contact"} text={"Contact Us"} />
    </nav>
  )
}

const Navlinks: FC<{
  className?: string
  text: string
  to: string
}> = ({ text, to, className }) => (
  <Link
    className={`${className} mx-4 flex-shrink-0`}
    activeClassName={"underline"}
    to={to}
  >
    {text}
  </Link>
)

export default Navbar
