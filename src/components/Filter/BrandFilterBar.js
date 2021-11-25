import React from "react"

import Button from "components/UI/Button"

import styles from "./BrandFilterBar.module.scss"

const BrandFilterBar = ({ items }) => {
   return (
      <div className={styles.wrapper}>
         {items.map((item, index) => (
            <Button key={index} className={styles.btn} href={item.slug}>
               <img src={item.image} alt={item.name} />
            </Button>
         ))}
      </div>
   )
}

export default BrandFilterBar
