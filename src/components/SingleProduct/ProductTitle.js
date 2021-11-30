import clsx from "clsx"
import React from "react"
import { FaStar } from "react-icons/fa"

import styles from "./ProductTitle.module.scss"

const ProductTitle = ({ name, rating }) => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.box}>
            <span className={styles.title}>{name}</span>
            <div className={styles.ratingStar}>
               {Array(5)
                  .fill()
                  .map((_, index) => (
                     <FaStar
                        key={index}
                        className={clsx({ [styles.check]: rating.number >= index + 1 })}
                     />
                  ))}
            </div>
            <span className={styles.ratingCount}>{rating.count} đánh giá</span>
         </div>
      </div>
   )
}

export default ProductTitle
