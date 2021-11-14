import React from "react"
import styles from "./CartBag.module.scss"
import { BsBag } from "react-icons/bs"

const CartBag = (props) => {
   return (
      <div className={styles.cartBox}>
         <div className={styles.cartIcon_Block}>
            <BsBag className={styles.cartIcon} />
            <span className={styles.quantity}>0</span>
         </div>
         <p className={styles.cartText}>
            Giỏ
            <br />
            Hàng
         </p>
      </div>
   )
}

export default CartBag
