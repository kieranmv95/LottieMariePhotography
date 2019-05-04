import React from "react"

import cx from "classnames";
import styles from "./styles.module.scss";

const FullWidthBlock = ({
  theme,
  img,
  children
}) => (
  <div className={cx(styles[theme], styles.fullWidthSplit)}>
    <div className={styles.fullWidthSplitContent}>
      {children}
    </div>
    <div className={styles.fullWidthSplitImage}>
      <img src={img} alt="hero" />
    </div>
  </div>
);

export default FullWidthBlock
