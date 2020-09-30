import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutme/aboutme"

const SecondPage = () => (
  <Layout>
    <SEO title="About me" />
    <AboutMe />
    <Link to="/">Back</Link>
  </Layout>
)

export default SecondPage
