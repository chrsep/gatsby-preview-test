import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel"
import * as React from "react"
import { FC } from "react"

const CustomCarousel: FC = ({ children }) => {
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

export default CustomCarousel
