import React from "react"
import styles from "./Section.module.scss"
import clsx from "clsx"

const Section = ({ children, className, ...props }) => {
   return (
      <section className={clsx(styles.section, { [className]: !!className })} {...props}>
         {children}
      </section>
   )
}

export default Section
