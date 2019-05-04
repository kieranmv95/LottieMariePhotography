import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header"
import "../../sass/master.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            titleShort
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitleShort={data.site.siteMetadata.titleShort} />
        <div>
          <main>{children}</main>
          <footer>Footer</footer>
        </div>
      </>
    )}
  />
)

export default Layout
