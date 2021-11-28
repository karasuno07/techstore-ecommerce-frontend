import React, { useState } from "react"

import { Col, Row } from "react-bootstrap"
import CheckoutSteps from "components/Cart/CheckoutSteps"
import CartSection from "components/Cart/CartSection/CartSection"
import CartAction from "components/Cart/CartAction/CartAction"

import styles from "./Checkout.module.scss"
import { useNavigate } from "react-router"
import CheckoutSection from "components/Cart/CheckoutSection/CheckoutSection"

const Checkout = () => {
   const nagivate = useNavigate()
   const [step, setStep] = useState(1)

   const onBackStep = () => {
      if (step > 1) {
         setStep(step - 1)
      } else {
         nagivate("/")
      }
   }

   const onNextStep = () => {
      if (step < 3) {
         setStep(step + 1)
      } else {
         // gọi API để thực hiện tạo hoá đơn thanh toán
      }
   }

   return (
      <div className={styles.wrapper}>
         <CheckoutSteps step={step} />
         <Row className="g-2">
            <Col lg={8} xl={9}>
               {step === 1 && <CartSection />}
               {step === 2 && <CheckoutSection />}
            </Col>
            <Col lg={4} xl={3}>
               <CartAction {...{ step, onBackStep, onNextStep }} />
            </Col>
         </Row>
      </div>
   )
}

export default Checkout
