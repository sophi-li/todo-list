import React from 'react'

import styles from './Footer.module.css'

const Footer = () => (
  <div className={styles.container}>
    <div>
      TomaTracker is based on the{' '}
      <a
        className={styles.link}
        href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        target="_blank"
        rel="noopener noreferrer"
      >
        pomodoro technique
      </a>
    </div>
    <a className={styles.link} href="https://github.com" target="__blank">
      Source code
    </a>
  </div>
)

export default Footer
