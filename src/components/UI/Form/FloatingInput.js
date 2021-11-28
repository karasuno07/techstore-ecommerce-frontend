import React from "react"

import Input from "./Input"

import styles from "./FloatingInput.module.scss"
import clsx from "clsx"

const FloatingInput = React.forwardRef(({ title, id, className, ...others }, inputRef) => {
   return (
      <div className={clsx(styles.group, className)}>
         <Input ref={inputRef} id={id} {...others} />
         <label htmlFor={id}>{title}</label>
      </div>
   )
})

export default FloatingInput
