import ProductCarousel from "components/Carousel/ProductCarousel/ProductCarousel"
import React, { useState } from "react"

import styles from "./Product.module.scss"
import ProductDetails from "./ProductDetails"

const Product = ({ product }) => {
   const [detailIndex, setDetailIndex] = useState(0)

   const handleSelectDetail = (index) => setDetailIndex(index)

   return (
      <div className={styles.wrapper} onVolumeChange={handleSelectDetail}>
         <ProductCarousel data={product.details[detailIndex]} />
         <ProductDetails data={product} />
      </div>
   )
}

export default Product
