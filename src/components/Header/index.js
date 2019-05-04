import React, { useState } from "react"
import Navigation from "../Navigation"
import { Link } from "gatsby";
import cx from "classnames";
import styles from "./styles.module.scss";

const Header = ({
  siteTitleShort
}) => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.headerLink}>
        {siteTitleShort}
      </Link>
      <div
        className={
          cx(styles.headerToggle, navActive && styles.headerToggleActive)
        }
        onClick={() => setNavActive(!navActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Navigation />
    </header>
  )
}

export default Header
