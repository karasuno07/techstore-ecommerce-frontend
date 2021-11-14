import React from "react"
import styles from "./Input.module.scss"
import clsx from "clsx"

const Input = ({ type, textarea, className, ...others }) => {
   const Component = !!textarea ? "textarea" : "input"
   return (
      <Component type={type} className={clsx(styles.input, styles[type], className)} {...others} />
   )
}

export default Input
