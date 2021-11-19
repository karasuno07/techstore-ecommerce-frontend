import React from "react"
import styles from "./BtnAuth2.module.scss"
import { FaGooglePlus } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const OrderInfo = ({iconName, text}) => {
   return (
      <div className={styles.orderInfoBox}>
         {iconName === "google" && <FaGooglePlus className={styles.orderInfoIcon} />}
         {iconName === "facebook" && <FaFacebook className={styles.orderInfoIcon} />}
         <p className={styles.orderInfoText}>
            {text}
         </p>
      </div>
   )
}

export default OrderInfo
