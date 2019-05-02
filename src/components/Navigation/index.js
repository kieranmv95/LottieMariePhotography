import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
)

export default Navigation