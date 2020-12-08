// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import NavBar from "../components/navBar"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const About: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <NavBar />
    <SEO title="About" />
    <h1>Katrina Gonzales</h1>
    <h2>About</h2>
    <p>This page will have more content in the near future. </p>
    {/* <p>You're currently on the "{path.replace("\/", "")}" page, which was built on {data.site.buildTime}.</p>
    <p>*ps: this page is written in TypeScript. See Gatsby <a href="https://www.gatsbyjs.com/docs/typescript/">documentation</a> about TypeScript.</p> */}
  </Layout>
)

export default About

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
