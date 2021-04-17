import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { FC } from "react"
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
// markup
type Props = PageProps<GatsbyTypes.IndexPageQuery>

const IndexPage: FC<Props> = ({ data }) => {
  return (
    <>
      <div className={"flex carousel-height"}>
        <Carousel plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 5000,
            }
          },
        ]}
          animationSpeed={1000}>
          <img src={"https://berkatgemilangperkasa.co.id/wp-content/uploads/2020/12/Establishment-banner.png"} />
          <img src={"https://berkatgemilangperkasa.co.id/wp-content/uploads/2020/12/employment-stats-banner.png"} />
          <img src={"https://berkatgemilangperkasa.co.id/wp-content/uploads/2020/12/business-focus-banner.png"} />
        </Carousel>
      </div>
      <main className={"mx-auto max-w-7xl"}>
        <div className={"flex"}>
        {data.allContentfulCategory.nodes.map(({ title }) => (
          <div key={title?.title} className={"mx-3"}>
            {title?.title}
          </div>
        ))}
      </div>


        <div className="prose">
          <h1>SELAMAT DATANG</h1>

          <p>
            Selamat datang dan terima kasih telah mengunjungi website PT. Berkat
            Gemilang Perkasa, perusahaan dengan misi dan motivasi untuk menjadi
            perusahaan terdepan dan utama dalam pengadaan barang dan jasa untuk
            berbagai kepentingan proyek pemerintah, baik dari tingkat daerah dan
            tingkat nasional, hingga tingkat internasional.
        </p>

          <div>
            <h1>KOLEKSI TERBARU</h1>
          </div>
        </div>
      </main>
    </>

  )
}

export const query = graphql`
  query IndexPage {
    allContentfulCategory {
      nodes {
        title {
          title
        }
      }
    }
    allContentfulProduct {
      nodes {
        productDescription {
          id
          productDescription
        }
      }
    }
  }
`

export default IndexPage
