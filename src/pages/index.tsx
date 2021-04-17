import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { FC } from "react"

// markup
type Props = PageProps<GatsbyTypes.IndexPageQuery>

const IndexPage: FC<Props> = ({ data }) => {
  return (
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
