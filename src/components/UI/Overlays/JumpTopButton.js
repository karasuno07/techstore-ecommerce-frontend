import React from "react"
import Button from "../../UI/Button"
import { FaChevronUp } from "react-icons/fa"
import styles from "./JumpTopButton.module.scss"

const JumpTopButton = () => {
   const handleJumpToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
   }

   return (
      <Button type="button" className={styles.jumpButton} onClick={handleJumpToTop}>
         <FaChevronUp />
      </Button>
   )
}

export default JumpTopButton
