import React from "react"

import Button from "components/UI/Button"
import { FaTimes, FaTimesCircle } from "react-icons/fa"

import clsx from "clsx"
import styles from "./Filter.module.scss"

const FilterList = ({ filters, handleRemoveFilter }) => {
   return (
      <div className={styles.wrapper}>
         <p className={styles.title}>Đang lọc theo</p>
         <div className={styles.filters}>
            {filters.map((filter, index) => {
               const criteria = filter.criteria.find((criteria) => criteria.active)
               const title = filter.filterName + ": " + criteria.value

               return (
                  <Button
                     key={index}
                     className={clsx(styles.filter, styles.active)}
                     onClick={handleRemoveFilter.bind(null, filter)}>
                     <span>{title}</span>
                     <FaTimesCircle className="ms-2" />
                  </Button>
               )
            })}
            <Button
               className={clsx(styles.filter, styles.active)}
               onClick={handleRemoveFilter.bind(null, null)}>
               <FaTimes />
               <span>Bỏ chọn tất cả</span>
            </Button>
         </div>
      </div>
   )
}

export default FilterList
