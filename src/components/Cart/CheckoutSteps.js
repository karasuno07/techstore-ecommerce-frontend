import clsx from "clsx"
import React from "react"

import { FaShoppingCart, FaDollarSign, FaCheck } from "react-icons/fa"

import styles from "./CheckoutSteps.module.scss"

const CheckoutSteps = ({ step = 1 }) => {
   return (
      <div className={styles.steps}>
         <ul sm="auto">
            <li as="li" className={clsx(styles.step, { [styles.active]: step === 1 })}>
               <span>
                  <FaShoppingCart />
               </span>
               <span>Giỏ hàng</span>
               <span>1</span>
            </li>
            <li as="li" className={clsx(styles.step, { [styles.active]: step === 2 })}>
               <span>
                  <FaDollarSign />
               </span>
               <span>Thanh toán</span>
               <span>2</span>
            </li>
            <li as="li" className={clsx(styles.step, { [styles.active]: step === 3 })}>
               <span>
                  <FaCheck />
               </span>
               <span>Xác nhận</span>
               <span>3</span>
            </li>
         </ul>
      </div>
   )
}

export default CheckoutSteps
