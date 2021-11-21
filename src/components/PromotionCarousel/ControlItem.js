import React, { useRef } from "react"
import styles from "./ControlItem.module.scss"
import clsx from "clsx"

const ControlItem = ({ children, active }) => {
   const nodeRef = useRef()

   return (
      <div ref={nodeRef} className={clsx(styles.slickItem, { [styles.active]: active })}>
         {children}
      </div>
   )
}

export default ControlItem
