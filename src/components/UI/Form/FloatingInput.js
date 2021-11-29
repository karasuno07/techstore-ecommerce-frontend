import React from "react"

import Input from "./Input"
import { MdErrorOutline } from "react-icons/md"

import styles from "./FloatingInput.module.scss"
import clsx from "clsx"

const FloatingInput = React.forwardRef(({ title, id, className, error, ...others }, inputRef) => {
   return (
      <div className={clsx(styles.group, className, { [styles.error]: error })}>
         {error && (
            <div className={styles.errorMessage}>
               <MdErrorOutline />
               <span>{error.message}</span>
            </div>
         )}
         <Input ref={inputRef} id={id} {...others} />
         <label htmlFor={id}>{title}</label>
      </div>
   )
})

export default FloatingInput
