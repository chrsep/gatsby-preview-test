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

      <div className="prose p-4 py-16">
        <h1>{data.contentfulPage?.title}</h1>
        <p>{data.contentfulPage?.subheading?.subheading}</p>
        <div>
          <h1>KOLEKSI TERBARU</h1>
        </div>
      </div>
    </main>
  )
}

export const query = graphql`
  query IndexPage {
    contentfulPage {
      title
      subheading {
        subheading
      }
    }
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
