import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import GithubImage from "../components/image"
import NavBar from "../components/navBar"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <NavBar />
    <SEO title="Home" />
    <h1>Katrina Gonzales</h1>
    <p>This is my website. </p>
    <p>
      University of Notre Dame alum. (BS in Computer Science '16, BA in Economics '17)
      <br />
      I'm a software engineer.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
      <a href={"https://www.linkedin.com/in/katrina7g/"} rel="noreferrer" target="_blank">
        LinkedIn
      </a>
      <a href={"https://github.com/katrina7g"} rel="noreferrer" target="_blank">
        GitHub
      </a>
    </div>
  </Layout>
)

export default IndexPage
