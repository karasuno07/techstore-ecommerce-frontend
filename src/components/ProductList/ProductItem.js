import React from "react"
import { Link } from "react-router-dom"

import Button from "components/UI/Button"
import { FaStar } from "react-icons/fa"
import { NumberFormatter } from "common/utils/StringUtils"

import clsx from "clsx"
import styles from "./ProductItem.module.scss"

const ProductItem = ({ item, onAddItem }) => {
   const formatter = NumberFormatter("vi", "VND")
   const defaultDetail = item.details.find((detail) => detail.isDefault)
   const salePercent =
      defaultDetail.discount && Math.round((defaultDetail.discount / defaultDetail.price) * 100)
   const discountedPrice = defaultDetail.discount
      ? defaultDetail.price - defaultDetail.discount
      : defaultDetail.price

   return (
      <div className={styles.wrapper}>
         {salePercent && (
            <div className={styles.discountSticker}>
               <p>Giảm {salePercent}%</p>
            </div>
         )}
         <div className={styles.hotsaleSticker} />
         <div className={styles.productImageBox}>
            <Link to={`/${item.category.slug}/${item.brand.slug}/${item.slug}`}>
               <img src={defaultDetail.images[0]} alt={item.name} width="100%" />
            </Link>
         </div>
         <div className={styles.productNameBox}>
            <p>{item.name}</p>
         </div>
         <div className={styles.productPriceBox}>
            <p>{formatter.format(discountedPrice)}</p>
            {defaultDetail.discount && <span>{formatter.format(defaultDetail.price)}</span>}
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
            <Button href={`/xyz`} size="sm" className={styles.btnDetail}>
               Xem chi tiết
            </Button>
            <Button
               size="sm"
               className={styles.btnPurchase}
               onClick={onAddItem.bind(null, item, defaultDetail, 1)}>
               Mua hàng
            </Button>
         </div>
      </div>
   )
}

export default ProductItem
