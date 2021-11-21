import React from "react"
import Button from "../UI/Button"
import styles from "./ControlButton.module.scss"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import clsx from "clsx"

const ControlButton = ({ show = false, onPrev, onNext }) => {
   return (
      <React.Fragment>
         <Button
            className={clsx(styles.controlButton, styles.prevButton, { [styles.show]: show })}
            onClick={onPrev}>
            <FaChevronLeft />
         </Button>
         <Button
            className={clsx(styles.controlButton, styles.nextButton, { [styles.show]: show })}
            onClick={onNext}>
            <FaChevronRight />
         </Button>
      </React.Fragment>
   )
}

export default ControlButton
