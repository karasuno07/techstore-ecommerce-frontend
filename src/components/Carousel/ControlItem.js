import React, { useRef } from "react"
import styles from "./ControlItem.module.scss"
import clsx from "clsx"

const ControlItem = ({ children, active }) => {
   const nodeRef = useRef()

   if (active && nodeRef.current) {
      nodeRef.current.scrollIntoView({
         behavior: "smooth",
      })
   }

   return (
      <div ref={nodeRef} className={clsx(styles.slickItem, { [styles.active]: active })}>
         {children}
      </div>
   )
}

export default ControlItem
