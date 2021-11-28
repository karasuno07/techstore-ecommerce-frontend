import React from "react"
import Button from "components/UI/Button"
import styles from "./ActionButtons.module.scss"
import { FaCheck, FaChevronLeft, FaMoneyCheck, FaShoppingBag } from "react-icons/fa"
import clsx from "clsx"

const ActionButtons = ({ step, onBackStep, onNextStep }) => {
   return (
      <div className={styles.actions}>
         <Button
            className={clsx(styles.btnBackward, {
               [styles.btnShopMore]: step === 1,
               [styles.btnBack]: step === 2,
            })}
            onClick={onBackStep}>
            {step === 1 ? <FaShoppingBag /> : <FaChevronLeft />}
            <span>{step === 1 ? "Shop more" : "Back"}</span>
         </Button>
         <Button
            className={clsx(styles.btnForward, {
               [styles.btnCheckout]: step === 1,
               [styles.btnFinish]: step === 2,
            })}
            onClick={onNextStep}>
            {step === 1 ? <FaMoneyCheck /> : <FaCheck />}
            <span>{step === 1 ? "Checkout" : "Finish"}</span>
         </Button>
      </div>
   )
}

export default ActionButtons
