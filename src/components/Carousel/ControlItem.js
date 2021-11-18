import React, { useEffect, useRef } from "react"
import styles from "./ControlItem.module.scss"
import clsx from "clsx"

const ControlItem = ({ children, active }) => {
   const nodeRef = useRef()

   useEffect(() => {
      if (active && nodeRef.current) {
         nodeRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
      }
   }, [active])

   return (
      <div ref={nodeRef} className={clsx(styles.slickItem, { [styles.active]: active })}>
         {children}
      </div>
   )
}

export default ControlItem
