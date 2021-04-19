import * as React from "react"
import { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticImage } from "gatsby-plugin-image"

type Props = PageProps<GatsbyTypes.IndexPageQuery>

const AboutUsPage: FC<Props> = ({ data }) => {
  return (
    <main>
      <StaticImage
        src="https://berkatgemilangperkasa.co.id/wp-content/uploads/2020/10/about-berkatgemilangperkasa.png"
        alt={"first"}
        placeholder={"blurred"}
        loading={"lazy"}
        formats={["auto", "webp", "avif"]}
        className={"carousel-height w-full"}
      />
      <div className="prose p-4 mx-auto text-left max-w-screen-md">
        <h1>SIAPA KAMI</h1>
        <p className={"font-light"}>PT. Berkat Gemilang Perkasa telah berdiri sejak 14 Januari 2014. Fokus utama proses bisnis dalam perusahaan ini adalah pengadaan barang-barang kepolisian yang sesuai spesifikasi dan berkualitas. Sejak tanggal 17 November 2015, PT. Berkat Gemilang Perkasa telah dikukuhkan sebagai Pengusaha Kena Pajak (PKP) dan memiliki izin resmi komersial pada tanggal 20 Agustus 2019.</p>
        <p className={"font-light"}>Tanggal Pendirian : 14 Januari 2014<br></br>
Dikukuhkan sebagai PKP : 17 November 2015<br></br>
Izin Komersial : 20 Agustus 2019<br></br>
NIB : 9120500812804</p>
        <p className={"font-light"}>Sesuai nama dari perusahaan kami, begitulah kami ingin diingat bahwa perusahaan kami hadir sebagai saluran BERKAT bagi banyak orang, baik dengan cara membuka kesempatan pekerjaan maupun memberikan pelayanan terbaik bagi mitra kerja kami. Begitupun dengan kata GEMILANG yang kami percaya bahwa perusahaan ini akan berjaya dan masyhur, dan memiliki peningkatan yang baik dan signifikan seiring dalam perjalanan kami. Akhirnya, PERKASA menjadi bagian dari nama perusahaan dengan harapan dapat menyelesaikan segala tantangan secara gagah dan berani, Kami tidak akan goyah dan berusaha memenuhi kebutuhan mitra kami secara baik dan bertanggung jawab.</p>
        <p className={"font-light"}>Semangat dan komitmen yang kami untuk terus meningkatkan kualitas dengan memberikan solusi dan inovasi. Kami terus berusaha untuk memberikan dukungan total dengan mitra kerja. Dengan dukungan langsung pembuat produk-produk utama kami, kami dapat memberikan dukungan komprehensif dan menyeluruh untuk pemenuhan kebutuhan proyek pemerintah.</p>
      </div>
    </main>
  )
}

// export const query = graphql`
//   query IndexPage {
//     contentfulPage {
//       title
//       subheading {
//         subheading
//       }
//     }
//     allContentfulCategory {
//       nodes {
//         title {
//           title
//         }
//       }
//     }
//     allContentfulProduct {
//       nodes {
//         productDescription {
//           id
//           productDescription
//         }
//       }
//     }
//   }
// `

export default AboutUsPage
