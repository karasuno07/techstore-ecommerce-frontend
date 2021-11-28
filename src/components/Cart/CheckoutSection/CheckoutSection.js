import React from "react"
import { useForm } from "react-hook-form"

import { Card, Col, Row } from "react-bootstrap"

import Input from "components/UI/Form/Input"
import Select from "components/UI/Form/Select"

import styles from "./CheckoutSection.module.scss"
import InputGroup from "components/UI/Form/InputGroup"
import { FaAt, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa"

const CheckoutSection = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { error },
   } = useForm()

   return (
      <Card className={styles.section}>
         <Card.Body className={styles.body}>
            <h3 className={styles.title}>Thông tin giao hàng</h3>
            <form className={styles.form}>
               <Row className="mb-3">
                  <label>Tên người nhận</label>
                  <Col>
                     <Input
                        rounded={true}
                        name="firstName"
                        placeholder="Nhập họ người nhận"
                        type="text"
                     />
                  </Col>
                  <Col>
                     <Input
                        rounded={true}
                        name="lastName"
                        placeholder="Nhập tên người nhận"
                        type="text"
                     />
                  </Col>
               </Row>

               <InputGroup
                  title="Địa chỉ email"
                  id="email"
                  className={styles.formInputGroup}
                  rounded={true}
                  appendChild={<FaAt />}
                  type="email"
                  placeholder="Nhập địa chỉ email"
               />
               <InputGroup
                  title="Địa chỉ nhận hàng"
                  id="address"
                  className={styles.formInputGroup}
                  rounded={true}
                  appendChild={<FaMapMarkedAlt />}
                  type="text"
                  placeholder="Nhập địa chỉ nhận hàng"
               />
               <InputGroup
                  title="SĐT nhận hàng"
                  id="phone-number"
                  className={styles.formInputGroup}
                  rounded={true}
                  appendChild={<FaPhoneAlt />}
                  type="tel"
                  placeholder="Nhập SĐT người nhận"
               />
               <div className={styles.paymentMethod}>
                  <Select
                     title="Phương thức thanh toán"
                     options={[
                        { value: "COD", title: "COD" },
                        { value: "Paypal", title: "Paypal" },
                        { value: "Credit Card", title: "Credit Card" },
                     ]}
                  />
               </div>
            </form>
         </Card.Body>
      </Card>
   )
}

export default CheckoutSection
