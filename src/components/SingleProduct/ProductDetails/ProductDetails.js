import React from "react"

import styles from "./ProductDetails.module.scss"
import { NumberFormatter } from "common/utils/StringUtils"

const ProductDetails = ({ data }) => {
   const formatter = NumberFormatter("vi", "VND")

   return (
      <div className={styles.wrapper}>
         <div className={styles.priceBox}>
            <span className={styles.discountedPrice}>{formatter.format(3000000)}</span>
            <span className={styles.originalPrice}>{formatter.format(3300000)}</span>
         </div>
      </div>
   )
}

export default ProductDetails
