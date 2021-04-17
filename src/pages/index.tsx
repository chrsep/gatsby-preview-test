import * as React from "react"
import { FC } from "react"
import { graphql, PageProps } from "gatsby"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticImage } from "gatsby-plugin-image"

type Props = PageProps<GatsbyTypes.IndexPageQuery>

const IndexPage: FC<Props> = ({ data }) => {
  return (
    <>
      {/*@ts-ignore*/}
      <Carousel>
        <StaticImage
          src="https://berkatgemilangperkasa.co.id/wp-content/uploads/2020/12/Establishment-banner.png"
          alt={"first"}
          placeholder={"blurred"}
          loading={"lazy"}
          formats={["auto", "webp", "avif"]}
        />
        <StaticImage
          src="https://berkatgemilangperkasa.co.id/wp-content/uploads/2020/12/employment-stats-banner.png"
          alt={"second"}
          placeholder={"blurred"}
          loading={"lazy"}
          formats={["auto", "webp", "avif"]}
        />
        <StaticImage
          src="https://berkatgemilangperkasa.co.id/wp-content/uploads/2020/12/business-focus-banner.png"
          alt={"third"}
          placeholder={"blurred"}
          loading={"lazy"}
          formats={["auto", "webp", "avif"]}
        />
      </Carousel>

      <main className={"mx-auto max-w-7xl"}>
        <div className="prose p-4 py-16">
          <h1>{data.contentfulPage?.title}</h1>
          <p>{data.contentfulPage?.subheading?.subheading}</p>
          <div>
            <h1>KOLEKSI TERBARU</h1>
            <div className={"flex"}>
              {data.allContentfulCategory.nodes.map(({ title }) => (
                <div key={title?.title} className={"mx-3"}>
                  {title?.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
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
