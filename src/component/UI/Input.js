import React from "react"
import styles from "./Input.module.css"
import { concatClassNames } from "../../util/StyleUtil"

const Input = ({ type, className, ...others }) => {
   return (
      <input
         type={type}
         className={concatClassNames([styles.input, styles[type], className])}
         {...others}
      />
   )
}

export default Input
