import React from "react"
import { Link } from "gatsby"

import styles from "./styles.module.scss";

const Navigation = () => (
  <nav className={styles.nav}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/contact">Showcase</Link></li>
      <li><Link to="/contact">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/contact">Services</Link></li>
    </ul>
  </nav>
)

export default Navigation