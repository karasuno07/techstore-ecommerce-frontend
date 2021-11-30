import React from "react"

import clsx from "clsx"
import styles from "./Spinner.module.scss"

const Spinner = () => {
   return (
      <div className={styles.spinner}>
         <div className={clsx(styles.inner, styles.one)} />
         <div className={clsx(styles.inner, styles.two)} />
         <div className={clsx(styles.inner, styles.three)} />
      </div>
   )
}

export default Spinner
