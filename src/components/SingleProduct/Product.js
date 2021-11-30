import ProductCarousel from "components/Carousel/ProductCarousel/ProductCarousel"
import React, { useState } from "react"

import styles from "./Product.module.scss"

const Product = ({ product }) => {
   const [detailIndex, setDetailIndex] = useState(0)

   const handleSelectDetail = (index) => setDetailIndex(index)

   return (
      <div className={styles.wrapper} onVolumeChange={handleSelectDetail}>
         <ProductCarousel data={product.details[detailIndex]} />
      </div>
   )
}

export default Product
