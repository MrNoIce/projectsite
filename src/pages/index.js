import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/form"
import Example from "../components/newForm"
import ProjectCard from "../components/projects/projectcard"


const IndexPage = () => {
  return (
    <Layout>
      <ProjectCard />
      <ContactForm />
      <Example/>
    </Layout>
  )
}
export default IndexPage
