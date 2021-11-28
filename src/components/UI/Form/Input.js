import React from "react"
import styles from "./Input.module.scss"
import clsx from "clsx"

const Input = React.forwardRef(
   ({ title, id, type, textarea, rounded, className, register, required, ...others }, ref) => {
      const Component = !!textarea ? "textarea" : "input"
      return (
         <React.Fragment>
            {title && (
               <label className={styles.label} htmlFor={id}>
                  {title}
               </label>
            )}
            <Component
               ref={ref}
               type={type}
               id={id}
               className={clsx(styles.input, className, {
                  [styles[type]]: type,
                  [styles.rounded]: rounded,
               })}
               {...others}
            />
         </React.Fragment>
      )
   }
)

export default Input
