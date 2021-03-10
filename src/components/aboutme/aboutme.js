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
        I was born and raised in Nashville, TN.
        I am a curious individual avidly drawn to exploring and figuring out all things in the mechanical world.
        Currently I'm a full time student at Nashville State, working on a degree in Mechanical Engineering.
        I also love reading, true-crime documentaries, room temperature water, dharma meditation talks and working
        with my hands to create things. For recreation, I enjoy many physical activities like skateboarding, cycling,
        hiking and swimming.
        </p>
      </div>
    </div>
  )
}
export default AboutMe
