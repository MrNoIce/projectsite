import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectPreview from "./project-preview"


const ProjectCard = () => {
  const dataJson = useStaticQuery(graphql`
    query GetData {
      allDataJson {
        edges {
          node {
            name
            description
            url
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  `)
  const data = dataJson.allDataJson.edges

  console.log(data, "data")
  return (
      <div className="project-card">

          {data.map(({ node: project }) => {
            const name = project.name
            const description = project.description
            const url = project.url
            const image = project.image.childImageSharp.fluid.src
            return (
              <ProjectPreview
                key={name}
                name={name}
                description={description}
                url={url}
                image={image}
              />
            )
          })}
      </div>
  )
}
export default ProjectCard