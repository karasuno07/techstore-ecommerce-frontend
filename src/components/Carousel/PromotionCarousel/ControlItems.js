import React, { useEffect, useRef } from "react"
import styles from "./ControlItems.module.scss"
import clsx from "clsx"

const ControlItem = ({ items, activeIndex, forward }) => {
   const nodeRef = useRef()

   useEffect(() => {
      if (nodeRef.current) {
         const item = nodeRef.current.querySelector("." + styles.slickItem)
         const scrollWidth = item.scrollWidth

         if (forward) {
            if (activeIndex >= 5) {
               nodeRef.current.scrollBy({ top: 0, left: scrollWidth, behavior: "smooth" })
            } else if (activeIndex === 0) {
               nodeRef.current.scrollTo({ top: 0, left: 0, behavior: "smooth" })
            }
         } else {
            nodeRef.current.scrollTo({
               top: 0,
               left: scrollWidth * activeIndex,
               behavior: "smooth",
            })
         }
      }
   }, [activeIndex, forward])

   return (
      <div className={styles.slickDots} ref={nodeRef}>
         {items.map((item, index) => (
            <div
               key={index}
               ref={nodeRef}
               className={clsx(styles.slickItem, { [styles.active]: activeIndex === index })}>
               {item.props.children}
            </div>
         ))}
      </div>
   )
}

export default ControlItem
