import * as React from "react"
import { FC, Suspense } from "react"
import CustomCarousel from "./CustomCarousel"

const SSRFriendlyCarousel: FC = ({ children }) => {
  if (typeof window === "undefined") {
    return <Container />
  }

  return (
    <Container>
      <Suspense fallback={<Container />}>
        <CustomCarousel>{children}</CustomCarousel>
      </Suspense>
    </Container>
  )
}

const Container: FC = ({ children }) => {
  return (
    <div className={"bg-gray-300 h-screen max-h-[600px] w-full"}>
      {children}
    </div>
  )
}

export default SSRFriendlyCarousel
