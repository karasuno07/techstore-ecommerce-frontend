import React from "react"
import Input from "./Input"

import clsx from "clsx"
import styles from "./InputGroup.module.scss"

const InputGroup = ({ title, id, className, rounded, appendChild, ...inputProps }) => {
   return (
      <div className={clsx(styles.wrapper)}>
         <label htmlFor={id}>{title}</label>
         <div className={clsx(styles.inputGroup, className, { [styles.rounded]: rounded })}>
            <span>{appendChild}</span>
            <Input id={id} rounded={rounded} {...inputProps} />
         </div>
      </div>
   )
}

export default InputGroup
