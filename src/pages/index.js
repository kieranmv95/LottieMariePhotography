import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Home`]} />
    <h1>Home</h1>
    <Link to="/contact">Contact</Link>
  </Layout>
)

export default IndexPage
