import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel"
import * as React from "react"
import { FC } from "react"

const SSRFriendlyCarousel: FC = ({ children }) => {
  if (typeof window === "undefined") {
    return <div />
  }

  return (
    <Carousel
      plugins={[
        "infinite",
        {
          resolve: autoplayPlugin,
          options: {
            interval: 5000,
          },
        },
      ]}
      animationSpeed={1000}
    >
      {children}
    </Carousel>
  )
}

export default SSRFriendlyCarousel
