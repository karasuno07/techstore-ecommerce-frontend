import Button from "components/UI/Button"
import React from "react"
import styles from "./ProductFilter.module.scss"

const ProductFilter = ({ title, filter }) => {
   return (
      <div className={styles.wrapper}>
         <h2>{title.name}</h2>
         <div className={styles.filters}>
            {filter &&
               filter.map((item) => (
                  <Button className={styles.filter} href={`/${title.slug}/${item.slug}`}>
                     {item.name}
                  </Button>
               ))}
            <Button className={styles.filter} href={`/${title.slug}`}>
               Xem tất cả
            </Button>
         </div>
      </div>
   )
}

export default ProductFilter
