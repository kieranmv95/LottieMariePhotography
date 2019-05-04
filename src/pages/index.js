import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Home`]} />
    <div className="container">
      <h1>Home</h1>
    </div>
  </Layout>
)

export default IndexPage
