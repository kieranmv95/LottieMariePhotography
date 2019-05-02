import React from "react"
import Navigation from "../Navigation"

const Header = ({ siteTitleShort }) => (
  <header>
    <p>{siteTitleShort}</p>
    <Navigation />
  </header>
)

export default Header
