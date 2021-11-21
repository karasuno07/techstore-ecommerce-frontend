import React from "react"
import styles from "./Slide.module.scss"

const Slide = ({ imageSrc }) => {
   return (
      <div className={styles.slide}>
         <img src={imageSrc} alt="#" width="100%" height="100%" />
      </div>
   )
}

export default Slide
