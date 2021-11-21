import React from "react"
import { Link } from "react-router-dom"
import styles from "./Button.module.scss"
import clsx from "clsx"

const Button = ({ children, className, href, variant, size, ...others }) => {
   const Component = !!href ? Link : "button"

   const props = { to: href, ...others }

   return (
      <Component
         className={clsx(styles.button, {
            [className]: !!className,
            [styles[variant]]: !!variant,
            [styles[size]]: !!size,
         })}
         {...props}>
         {children}
      </Component>
   )
}

export default Button
