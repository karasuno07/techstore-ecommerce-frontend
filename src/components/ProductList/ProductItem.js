import React from "react"
import { Link } from "react-router-dom"
import styles from "./ProductItem.module.scss"

const ProductItem = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.discountSticker}>
            <p>Giảm n%</p>
         </div>
         <div className={styles.hotsaleSticker} />
         <div className={styles.imageBox}>
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
      </div>
   )
}

export default ProductItem
