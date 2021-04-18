import * as React from "react"
import { FC } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer: FC = () => {
  return (
    <footer className={"flex flex-wrap py-5 bg-gray-700 max-w-full text-white align-center"}>
      <div className={"lg:flex-1 p-4 w-full text-center"}>
        <Link to={"/"}>
          <StaticImage
            src={"../images/BGP-Logo.webp"}
            alt={"logo"}
            width={216}
            formats={["auto", "webp", "avif"]}
          />
        </Link>
      </div>
      <div className={"lg:flex-1 text-white p-4 text-left w-full"}>
        <h1 className={"text-2xl mb-1"}>Hubungi Kami</h1>
        <p className="text-xs text-left leading-6">
          Kantor : Grand Puri Niaga, Jl. Puri Kencana Blok K6 No 5J, Kembangan, Jakarta Barat 11610<br></br>
Gudang : Jl. Ciraden Desa Citapen, Cihampelas, West Bandung, 40562<br></br>
Telephone: 021-22345893<br></br>
Email: administrator@berkatgemilangperkasa.co.id
          </p>
      </div>
      <div className={"lg:flex-1 p-4 text-white text-left w-full"}>
        <label className="block">
          <span className="text-white text-sm">Full name</span>
          <input type="text" className="mt-1 block max-w-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" />
        </label>
        <label className="block">
          <span className="text-white text-sm">Phone</span>
          <input type="text" className="mt-1 block max-w-sm border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" />
        </label>
        <button className="mt-2 mb-2 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
</button>
        <p className="text-sm text-left font-bold">
          <span className="text-xs font-light">Powered By :</span> Ant Digital
          </p>
      </div>
    </footer>
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

export default Footer
