import React from "react"
import styles from "./PromotionBanners.module.scss"

const PromotionBanners = ({ items }) => {
   return (
      <div className={styles.wrapper}>
         {!!items &&
            items.map((item) => (
               <div class={styles.banner}>
                  <img src={item.image} alt="#" width="100%" height="100%" />
               </div>
            ))}
      </div>
   )
}

export default PromotionBanners
