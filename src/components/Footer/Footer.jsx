import React from "react";

import styles from "./Footer.module.css";

const Footer = () => (
  <div className={styles.container}>
    <a className={styles.link} href="https://github.com" target="__blank">
      Source code
    </a>
  </div>
);

export default Footer;
