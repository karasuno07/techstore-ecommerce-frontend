import clsx from "clsx"
import React from "react"
import styles from "./Select.module.scss"

const Select = React.forwardRef(({ title, id, className, options, children, ...others }, ref) => {
   if (options != null && !Array.isArray(options)) {
      throw new TypeError("'options' argument must be an array")
   }

   return (
      <React.Fragment>
         {title && (
            <label className={styles.label} htmlFor={id}>
               {title}
            </label>
         )}
         <select ref={ref} id={id} className={clsx(styles.select, className)} {...others}>
            {options &&
               options.map((option, index) => (
                  <option key={index} value={option.value} {...option}>
                     {option.title}
                  </option>
               ))}
            {!options && children}
         </select>
      </React.Fragment>
   )
})

export default Select
