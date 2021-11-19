import React from "react"
import Button from "../Button"
import { FaChevronUp } from "react-icons/fa"
import styles from "./JumpTopButton.module.scss"

const JumpTopButton = () => {
   const handleJumpToTop = () => window.scroll(0, 0)

   return (
      <Button type="button" hover={true} className={styles.jumpButton} onClick={handleJumpToTop}>
         <FaChevronUp />
      </Button>
   )
}

export default JumpTopButton
