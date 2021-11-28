import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { cartAction } from "app/ecommerce-pages/cartSlice"

import { Card } from "react-bootstrap"
import CartItem from "./CartItem"

import styles from "./CartSection.module.scss"

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
