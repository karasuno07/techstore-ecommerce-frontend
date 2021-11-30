import React from "react"

import Button from "components/UI/Button"
import {
   FaSortAlphaDown,
   FaSortAlphaUp,
   FaSortAmountDown,
   FaSortAmountUp,
   FaPercent,
   FaEye,
} from "react-icons/fa"

import clsx from "clsx"
import styles from "./Filter.module.scss"

const SortFilter = ({ sort, handleActiveFilter }) => {
   console.log(sort)
   return (
      <div className={styles.wrapper}>
         <p className={styles.title}>Sắp xếp theo</p>
         <div className={styles.filters}>
            <Button
               data-filter="name"
               onClick={handleActiveFilter}
               className={clsx(styles.filter, styles.active)}>
               {sort.name && <FaSortAlphaDown className="icon-md" />}
               {!sort.name && <FaSortAlphaUp className="icon-md" />}
               <span>Tên ({sort.name ? "A-Z" : "Z-A"})</span>
            </Button>
            <Button
               data-filter="highPrice"
               onClick={handleActiveFilter}
               className={clsx(styles.filter, { [styles.active]: sort.highPrice })}>
               <FaSortAmountDown />
               <span>Giá cao</span>
            </Button>
            <Button
               data-filter="lowPrice"
               onClick={handleActiveFilter}
               className={clsx(styles.filter, { [styles.active]: sort.lowPrice })}>
               <FaSortAmountUp />
               <span>Giá thấp</span>
            </Button>
            <Button
               data-filter="hotDiscount"
               onClick={handleActiveFilter}
               className={clsx(styles.filter, { [styles.active]: sort.hotDiscount })}>
               <FaPercent />
               <span>Khuyến mãi hot</span>
            </Button>
            <Button
               data-filter="mostView"
               onClick={handleActiveFilter}
               className={clsx(styles.filter, { [styles.active]: sort.mostView })}>
               <FaEye />
               <span>Xem nhiều</span>
            </Button>
         </div>
      </div>
   )
}

export default SortFilter
