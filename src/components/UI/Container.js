import clsx from "clsx"
import React from "react"

import styles from "./Container.module.scss"

const Container = ({ size, className, children, ...others }) => {
   return (
      <div className={clsx(styles.container, className, { [styles[size]]: size })} {...others}>
         {children}
      </div>
   )
}

export default Container
