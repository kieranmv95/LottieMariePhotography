import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import FullWidthBlock from "../components/FullWidthSplit"

import styles from "./index.module.scss"

import heroImg from "../images/hero.jpeg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Home`]} />
    <FullWidthBlock
      img={heroImg}
      theme="purple"
    >
      <div className={styles.heroContent}>
        <h1>Lottie Marie<br/>Photography</h1>
      </div>
    </FullWidthBlock>
  </Layout>
)

export default IndexPage
