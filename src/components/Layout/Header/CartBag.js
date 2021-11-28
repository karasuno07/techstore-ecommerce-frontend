import React from "react"
import { useSelector } from "react-redux"

import Button from "components/UI/Button"
import { BsBag } from "react-icons/bs"

import styles from "./CartBag.module.scss"

const CartBag = () => {
   const cartItemQuantity = useSelector((state) => state.cart.totalQuantity)

   return (
      <Button href="/cart" className={styles.cartBox}>
         <div className={styles.cartIcon_Block}>
            <BsBag className={styles.cartIcon} />
            <span className={styles.quantity}>{cartItemQuantity}</span>
         </div>
         <p className={styles.cartText}>
            Giỏ
            <br />
            Hàng
         </p>
      </Button>
   )
}

export default CartBag
