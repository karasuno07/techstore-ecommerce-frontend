import React from "react"
import styles from "./DarkenOverlay.module.scss"
import { CSSTransition } from "react-transition-group"

const DarkenOverlay = (props) => {
   const nodeRef = React.useRef(null)
   return (
      <CSSTransition
         nodeRef={nodeRef}
         in={props.active}
         timeout={{
            enter: 0,
            exit: 500,
         }}
         mountOnEnter
         unmountOnExit
         classNames={{
            enterDone: styles.active,
            exitActive: styles.hiding,
         }}>
         <div ref={nodeRef} className={styles.overlay} />
      </CSSTransition>
   )
}

export default DarkenOverlay
