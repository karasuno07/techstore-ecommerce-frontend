import React from "react"
import { Link } from "react-router-dom"
import styles from "./ProductItem.module.scss"
import { NumberFormatter } from "common/StringUtils"

const ProductItem = () => {
   const formatter = NumberFormatter("vi", "VND")

   return (
      <div className={styles.wrapper}>
         <div className={styles.discountSticker}>
            <p>Giảm n%</p>
         </div>
         <div className={styles.hotsaleSticker} />
         <div className={styles.productImageBox}>
            <Link to={"xyz"}>
               <img
                  src={
                     "https://cdn.cellphones.com.vn/media/catalog/product/cache/8/image/1000x/040ec09b1e35df139433887a97daa66f/s/m/sm-f926_zfold3_5g_openback_phantomsilver_210611.jpg"
                  }
                  alt=""
                  width="100%"
               />
            </Link>
         </div>
         <div className={styles.productNameBox}>
            <p>Product 1 ABCXYZ</p>
         </div>
         <div className={styles.productPriceBox}>
            <p>{formatter.format(30000000)}</p>
            <span>{formatter.format(31900000)}</span>
         </div>
         <div className={styles.productRatingBox}></div>
      </div>
   )
}

export default ProductItem
