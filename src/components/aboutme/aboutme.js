import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "images/profile-image.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about-me-page">
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="My profile image"
        className="about-me-profile-img"
        style={{
          height: `auto`,
          maxHeight: `400px`,
          width: `auto`,
          maxWidth: `400px`,
        }}
      />
      <div className="about-me-text">
        <p>
          Hi! I’m Jake, from Nashville, TN. I am a curious person who enjoys
          figuring out the building blocks of the world, and rearranging them to
          build something even better. My life is developing software, close
          friendships, and adventuring. Currently I am building small
          applications in my spare time while on the hunt for my first software
          position. I am also an avid reader, lover of all true-crime
          documentaries, and dharma meditation talks.
        </p>
      </div>
    </div>
  )
}
export default AboutMe
