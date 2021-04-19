import * as React from "react"
import { FC } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticImage } from "gatsby-plugin-image"

const AboutUsPage: FC<{}> = () => {
  return (
    <main>
      <StaticImage
        src="https://berkatgemilangperkasa.co.id/wp-content/uploads/2020/11/contact-us-today.jpg"
        alt={"first"}
        placeholder={"blurred"}
        loading={"lazy"}
        formats={["auto", "webp", "avif"]}
        className={"carousel-height w-full mt-5"}
      />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 p-10 text-center">
        <div className="font-light text-sm"><span className="font-bold">PHONE</span><br></br>Phone: (021) - 22345893</div>
        <div className="font-light text-sm">
          <span className="font-bold">ALAMAT</span><br></br>
Kantor: Grand Puri Niaga, Jl. Puri Kencana Blok K6 No 5J, Kembangan, Jakarta Barat 11610<br></br>
Gudang: Jl. Ciraden Desa Citapen, Cihampelas, West Bandung, 40562</div>
        <div className="font-light text-sm"><span className="font-bold">EMAIL</span><br></br>
administrator@berkatgemilangperkasa.co.id

</div>
        <div className="font-light text-sm"><span className="font-bold">LICENSE NIB</span><br></br>
9120500812804</div>
      </div>
      <div className="flex flex-col p-10 space-y-6">
        <div className="mx-auto w-full lg:w-1/2 text-center">
          <h1 className="font-bold text-2xl">Contact Form</h1>
        </div>

        <div className="mx-auto w-full lg:w-1/2 text-center">
          Full name
          <input type="text" className="mt-1 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" />
        </div>
        <div className="mx-auto w-full lg:w-1/2 text-center">
          Phone
          <input type="text" className="mt-1 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" />
        </div>
        <div className="mx-auto w-full lg:w-1/2 text-center">
          Message
          <textarea className="mt-1 w-full border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="" />
        </div>
        <div className="mx-auto w-full lg:w-1/2 text-center">
          <button className="mt-2 mb-2 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
        </button>
        </div>
      </div>
    </main>
  )
}

export default AboutUsPage
