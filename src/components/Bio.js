import React from "react"
import Img from "gatsby-image"
import ExternalLink from "./ExternalLink"
import { useStaticQuery, graphql } from "gatsby"

export default function Bio() {
  const data = useStaticQuery(graphql`
    fragment SocialMedia on File {
      data: childImageSharp {
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    query BioQuery {
      github: file(absolutePath: { regex: "/github.png/" }) {
        ...SocialMedia
      }
      twitter: file(absolutePath: { regex: "/twitter.png/" }) {
        ...SocialMedia
      }
      avatar: file(absolutePath: { regex: "/avatar.png/" }) {
        data: childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)
  console.log(data.site)
  return (
    <>
      <div className="flex sm:items-center mt-8 mb-6 sm:flex-row flex-col items-start">
        <p className="mb-0 lg:text-lg text-gray-400">
          fizzy drinks and fizzy thoughts
        </p>
      </div>

      <div className="mb-8">
        <div
          className="grid gap-4 grid-flow-col"
          style={{ width: "max-content" }}
        >
        </div>
      </div>
</>
  )
}
