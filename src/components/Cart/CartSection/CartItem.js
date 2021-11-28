import React from "react"

import Button from "components/UI/Button"
import Input from "components/UI/Form/Input"
import { Col, Row } from "react-bootstrap"
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa"

import { NumberFormatter } from "common/utils/StringUtils"

import styles from "./CartItem.module.scss"
import clsx from "clsx"

const CartItem = ({ item, onIncrease, onDecrease }) => {
   const formatter = NumberFormatter("vi", "VND")
   const { product, detail, quantity } = item
   const totalPrice = (detail.price - detail.discount) * quantity

   return (
      <Row className={styles.wrapper}>
         <Col sm={6} md={5} lg={4} className={styles.image}>
            <img alt={product.name} src={detail.images[0]} />
         </Col>

         <Col sm={6} md={7} lg={8} className={styles.info}>
            <Row>
               <Col as="ul" md={8}>
                  <li className={styles.name}>{product.name}</li>
                  <li>
                     <span className="fw-bold">Thương hiệu: </span>
                     <span>{product.brand.name}</span>
                     <span> | </span>
                     <span className="fw-bold">Danh mục: </span>
                     <span>{product.category.name}</span>
                  </li>
                  <li>
                     <span className="fw-bold">Giá sản phẩm: </span>
                     <span>{formatter.format(detail.price)}</span>
                  </li>
                  <li>
                     <span className="fw-bold">Khuyến mãi: </span>
                     <span>{formatter.format(detail.discount)}</span>
                  </li>
               </Col>
               <Col md={4} className={styles.totalPrice}>
                  <span className={styles.label}>Tổng giá</span>
                  <span className={styles.value}>{formatter.format(totalPrice)}</span>
               </Col>
            </Row>
            <li className={styles.action}>
               <div className={clsx("input-group", "inline-group", styles.inputQuantity)}>
                  <Button
                     className={styles.btnQuantity}
                     onClick={onDecrease.bind(null, product.id, detail.id, false)}>
                     <FaMinus />
                  </Button>
                  <Input
                     className={styles.quantity}
                     min="1"
                     step="1"
                     type="number"
                     value={item.quantity}
                  />
                  <Button
                     className={styles.btnQuantity}
                     onClick={onIncrease.bind(null, product, detail, 1)}>
                     <FaPlus />
                  </Button>
               </div>
               <Button
                  className={styles.btnRemove}
                  onClick={onDecrease.bind(null, product.id, detail.id, true)}>
                  <FaTrashAlt />
               </Button>
            </li>
         </Col>
      </Row>
   )
}

export default CartItem
