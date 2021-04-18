import * as React from "react"
import { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticImage } from "gatsby-plugin-image"

type Props = PageProps<GatsbyTypes.ProductPageQuery>

const ProductPage: FC<Props> = ({ data }) => {
  return (
      <main  className="mt-6">
        <div className="prose p-4 mx-auto mt-2 text-center">
          <h1>{data.contentfulPage?.title}</h1>
          <p>{data.contentfulPage?.subheading?.subheading}</p>
          <div className={"mt-5"}>
            <h1>KOLEKSI TERBARU</h1>
            <div className={"flex"}>
              {data.allContentfulCategory.nodes.map(({ title }) => (
                <div key={title?.title} className={"mx-3"}>
                  {title?.title}
                </div>
              ))}
            </div>
            <div className={"flex"}>
              <ul>
              {data.allContentfulProduct.nodes.map(({ productName, slug }) => (
                <li key={productName?.productName} className={"mx-3 text-gray-500"}>
                  {productName?.productName} {slug}
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
  )
}

export const query = graphql`
  query ProductPage {
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
        productName {
          id
          productName
        }
        slug
      }
    }
  }
`

export default ProductPage
