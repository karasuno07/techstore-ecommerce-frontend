import React from "react"
import styles from "./OrderInfo.module.scss"
import { FaTruck } from "react-icons/fa"

const OrderInfo = () => {
   return (
      <div className={styles.orderInfoBox}>
         <FaTruck className={styles.orderInfoIcon} />
         <p className={styles.orderInfoText}>
            Tra cứu
            <br />
            đơn hàng
         </p>
      </div>
   )
}

export default OrderInfo
