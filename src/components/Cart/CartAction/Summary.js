import React from "react"

import { Card } from "react-bootstrap"
import { NumberFormatter } from "common/utils/StringUtils"

import styles from "./Summary.module.scss"
import { useSelector } from "react-redux"

const Summary = () => {
   const formatter = NumberFormatter("vi", "VND")
   const cart = useSelector((state) => state.cart)

   return (
      <Card className={styles.wrapper}>
         <Card.Header className={styles.header}>
            <span className="fw-bold">TỔNG HOÁ ĐƠN</span>
         </Card.Header>
         <Card.Body className={styles.body}>
            <ul>
               <li>
                  <span className="fw-bold me-1">Tổng tiền:</span>
                  <span className="subtotal">{formatter.format(cart.subtotal)}</span>
               </li>
               <li>
                  <span className="fw-bold me-1">Thuế GTGT (VAT):</span>
                  <span className="taxes">{cart.taxFee * 100}%</span>
               </li>
               <li>
                  <span className="fw-bold me-1">Giảm giá (Coupon/Voucher):</span>
                  <span className="shipping-fee">{formatter.format(cart.voucherPoint)}</span>
               </li>
               <li>
                  <span className="fw-bold me-1">Phí vận chuyển:</span>
                  <span className="shipping-fee">{formatter.format(cart.shippingFee)}</span>
               </li>
               <hr />
               <li>
                  <span className="fw-bold me-1">Thành tiền:</span>
                  <span className="total">{formatter.format(cart.total)}</span>
               </li>
            </ul>
         </Card.Body>
      </Card>
   )
}

export default Summary
