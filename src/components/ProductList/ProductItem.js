import React from "react"
import { Link } from "react-router-dom"

import { FaStar } from "react-icons/fa"
import { NumberFormatter } from "common/StringUtils"
import clsx from "clsx"
import styles from "./ProductItem.module.scss"
import Button from "components/UI/Button"

const ProductItem = ({ item }) => {
   const formatter = NumberFormatter("vi", "VND")
   const salePercent = item.discount && Math.round((item.discount / item.price) * 100)

   return (
      <div className={styles.wrapper}>
         {salePercent && (
            <div className={styles.discountSticker}>
               <p>Giảm {salePercent}%</p>
            </div>
         )}
         <div className={styles.hotsaleSticker} />
         <div className={styles.productImageBox}>
            <Link to={"xyz"}>
               <img src={item.image} alt={item.name} width="100%" />
            </Link>
         </div>
         <div className={styles.productNameBox}>
            <p>{item.name}</p>
         </div>
         <div className={styles.productPriceBox}>
            <p>{formatter.format(item.discount ? item.price - item.discount : item.price)}</p>
            {item.discount && <span>{formatter.format(item.price)}</span>}
         </div>
         <div className={styles.productRatingBox}>
            {Array(5)
               .fill()
               .map((_, index) => (
                  <FaStar
                     key={index}
                     className={clsx({ [styles.check]: item.rating.number >= index + 1 })}
                  />
               ))}
            <span>{item.rating.count ? item.rating.count : 0} đánh giá</span>
         </div>
         <div className={styles.btnBlock}>
            <Button size="sm" className={styles.btnDetail}>
               Xem chi tiết
            </Button>
            <Button size="sm" className={styles.btnPurchase}>
               Mua hàng
            </Button>
         </div>
      </div>
   )
}

export default ProductItem
