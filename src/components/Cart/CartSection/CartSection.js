import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { cartAction } from "app/ecommerce-pages/cartReducer"

import { Card } from "react-bootstrap"
import CartItem from "./CartItem"

import styles from "./CartSection.module.scss"
import { FaExclamationCircle } from "react-icons/fa"

const CartSection = () => {
   const dispatch = useDispatch()
   const cart = useSelector((state) => state.cart)

   const handleIncreseQuantity = (product, detail, quantity) => {
      dispatch(cartAction.addItem({ product, detail, quantity }))
   }

   const handleDecreseQuantity = (productId, detailId, removeAll) => {
      dispatch(cartAction.removeItem({ itemKey: { productId, detailId }, removeAll }))
   }

   return (
      <Card className={styles.section}>
         <Card.Header className={styles.header}>DANH SÁCH GIỎ HÀNG</Card.Header>
         <Card.Body className={styles.body}>
            {cart.totalQuantity === 0 && (
               <div className={styles.emptyCart}>
                  <div className={styles.notification}>
                     <FaExclamationCircle />
                     <span>Chưa có sản phẩm nào trong giỏ hàng.</span>
                  </div>
               </div>
            )}
            {[...cart.items.values()].map((item, index) => (
               <CartItem
                  key={index}
                  item={item}
                  onIncrease={handleIncreseQuantity}
                  onDecrease={handleDecreseQuantity}
               />
            ))}
         </Card.Body>
      </Card>
   )
}

export default CartSection
