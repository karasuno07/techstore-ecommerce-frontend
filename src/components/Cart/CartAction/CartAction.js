import React from "react"
import ActionButtons from "./ActionButtons"
import Summary from "./Summary"
import VoucherInput from "./VoucherInput"
import styles from "./CartAction.module.scss"

const CartAction = ({ step, onBackStep, onNextStep }) => {
   return (
      <div className={styles.wrapper}>
         <Summary />
         <div className={styles.action}>
            <VoucherInput />
            <ActionButtons {...{ step, onBackStep, onNextStep }} />
         </div>
      </div>
   )
}

export default CartAction
