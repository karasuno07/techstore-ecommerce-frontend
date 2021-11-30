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
      formState: { errors },
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
                        id="firstName"
                        placeholder="Nhập họ người nhận"
                        type="text"
                        {...register("firstName", {
                           required: "Không được bỏ trống họ/tên người nhận",
                           minLength: {
                              value: 2,
                              message: "Họ phải chứa tối thiểu 2 ký tự",
                           },
                        })}
                        error={errors.firstName}
                     />
                  </Col>
                  <Col>
                     <Input
                        rounded={true}
                        id="lastName"
                        placeholder="Nhập tên người nhận"
                        type="text"
                        {...register("lastName", {
                           required: "Không được bỏ trống họ/tên người nhận",
                           minLength: {
                              value: 2,
                              message: "Tên phải chứa tối thiểu 2 ký tự",
                           },
                        })}
                        error={errors.lastName}
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
                  {...register("email", {
                     required: "Không được bỏ trống email",
                     pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Sai định dạng email",
                     },
                  })}
                  error={errors.email}
               />
               <InputGroup
                  title="Địa chỉ nhận hàng"
                  id="address"
                  className={styles.formInputGroup}
                  rounded={true}
                  appendChild={<FaMapMarkedAlt />}
                  type="text"
                  placeholder="Nhập địa chỉ nhận hàng"
                  {...register("address", {
                     required: "Không được bỏ trống địa chỉ nhận hàng",
                  })}
                  error={errors.address}
               />
               <InputGroup
                  title="SĐT nhận hàng"
                  id="phoneNumber"
                  className={styles.formInputGroup}
                  rounded={true}
                  appendChild={<FaPhoneAlt />}
                  type="tel"
                  placeholder="Nhập SĐT người nhận"
                  {...register("phoneNumber", {
                     required: "Không được bỏ trống SĐT",
                  })}
                  error={errors.phoneNumber}
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
