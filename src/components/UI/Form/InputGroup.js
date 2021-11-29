import React from "react"
import Input from "./Input"

import clsx from "clsx"
import styles from "./InputGroup.module.scss"

const InputGroup = ({ title, id, className, rounded, appendChild, error, ...inputProps }) => {
   return (
      <div className={clsx(styles.wrapper, { [styles.error]: error })}>
         <label htmlFor={id}>{title}</label>
         <div className={clsx(styles.inputGroup, className, { [styles.rounded]: rounded })}>
            <span>{appendChild}</span>
            <Input id={id} rounded={rounded} {...inputProps} />
         </div>
         {error && <span className={styles.errorText}>{error.message}</span>}
      </div>
   )
}

export default InputGroup
